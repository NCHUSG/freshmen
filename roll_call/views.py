from django.http import HttpResponse
from django.shortcuts import render_to_response

def entry(request):
	return render_to_response('roll_call/entry/entry.html',locals())