from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from apps.roll_call.models import RCStu, RCRecord
# 要取得會員的model要這樣寫
from oscar.core.compat import get_user_model
from apps.user.models import User
User = get_user_model()

def entry(request):
	return render_to_response('roll_call/entry/entry.html',locals())

def check(request, key=0):
	if key=='0':
		RCStuL = RCStu.objects.all()  
		team = '所有'
	elif key!='':
		RCStuL = RCStu.objects.filter(team=key)  
		team = '第' + RCStuL[0].team
	return render_to_response('roll_call/check/check.html',locals())

def assignTeam(request):
	if request.POST:
		data = request.POST #all element of QuerySet is type of list, i dont know why but turn it into diction can disassembler its list into its origin type.
		data=data.dict()# turn Querydict into python's dict
		####Build default dict, if find data already exitst, than update the info. #####
		print(data)

	u = User.objects.all()
	print(u)
	# print(User._meta.get_all_field_names())
	return render_to_response('roll_call/assignTeam/assignTeam.html',RequestContext(request, locals()))