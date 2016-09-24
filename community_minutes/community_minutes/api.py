from django.http import JsonResponse, Http404
from core.models import *

def movement(request, movement):
    try:
        movement = Movement.objects.get(id__exact=int(movement))
    except:
        msg = "Unable to locate movement {0}"
        raise Http404(msg.format(movement))
    votes = Vote.objects.filter(movement__exact=movement)
    votes = list(map(lambda x: {'yay': x.yay_vote, 'person': x.person.id}, votes))
    data = movement.dictify()
    data['votes'] = votes
    return JsonResponse(data)

def meeting(request, meeting):
    try:
        meeting = Meeting.objects.get(id__exact=int(meeting))
    except:
        msg = "Unable to locate meeting {0}"
        raise Http404(msg.format(meeting))
    data = meeting.dictify()
    data['attendance'] = list(map(lambda x: {
            'name': x.person.name,
            'position': x.person.position,
            'present': x.present
        },
        Attendance.objects.filter(meeting__id__exact=meeting.id)
    ))
    data['movements'] = list(map(lambda x: {
            'id': x.id,
            'title': x.title,
            'description': 'This is a description from elasticsearch',
        },
        Movement.objects.filter(meeting__exact=meeting)
    ))
    return JsonResponse(data)

def person(request, person):
    try:
        person = Person.objects.get(id__exact=int(person))
    except:
        msg = "Unable to locate person {0}"
        raise Http404(msg.format(person))
    data = {
        'name': person.name,
        'position': person.position
    }
    votes = list(map(lambda x: {
            'yay': x.yay_vote,
            'movement': {
                'title': x.movement.title,
                'id': x.movement.id,
            }
        },
        Vote.objects.filter(person__exact=person)
    ))
    data['votes'] = votes
    return JsonResponse(data)
