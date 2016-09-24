from django.http import JsonResponse, Http404

def meeting(request, meeting):
    try:
        meeting = Meeting.objcets.get(id__exact=int(meeting))
    except:
        msg = "Unable to locate meeting {0}"
        raise Http404(msg.format(meeting))
    data = {
        'hello': 'dog',
        'meeting': meeting
    }
    return JsonResponse(data)
