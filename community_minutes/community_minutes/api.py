from django.http import JsonResponse, Http404
from core.models import *

def movement(request, movement):
    try:
        movement = Movement.objects.get(id__exact=int(movement))
    except:
        msg = "Unable to locate movement {0}"
        raise Http404(msg.format(movement))
    votes = Vote.objects.all().filter(movement__exact=movement)
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
    data = {
        'hello': 'dog',
        'meeting': meeting
    }
    return JsonResponse(data)
