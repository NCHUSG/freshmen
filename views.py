# -*- coding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.shortcuts import render
from django.utils import timezone # auto generate create time.
from django.contrib.auth.decorators import login_required
from apps.roll_call.models import RCStu, RCRecord, StudentST, StudentFD
# 要取得會員的model要這樣寫
from oscar.core.compat import get_user_model
from apps.user.models import User
User = get_user_model()

def entry(request):
	return render_to_response('roll_call/entry/entry.html',locals())

@login_required
def check(request, key):
	teamRange = range(1,95)
	if request.POST:
		data = request.POST 
		data=data.dict()
		RCStuL = RCStu.objects.filter(team=key)
		# 篩選出該小隊的所有成員，然後沒有出現再request.post的資料裏面的就表示他是缺席，因為checkbox只會回傳有勾選的選項
		order = data['order'] # order是表示這是今天第幾次的點名（主辦單位再看一下時程表就可以知道這是幾點幾分的點名）
		d = {'RC_order' : order, 'create' : timezone.localtime(timezone.now())}
		for i in RCStuL:
			if i.studentID not in data:
				# 點名的時候因為學生都已經分配好小隊了，所以已經有屬於roll_call的table，以學號當作key，所以可以直接get
				d['present'] = True
				r = RCRecord.objects.update_or_create(RCStu=i, RC_order=order, defaults=d)
				# 因為可能會手誤點錯，所以是可以更新出席狀態的
			else:
				d['present'] = False
				r = RCRecord.objects.update_or_create(RCStu=i, RC_order=order, defaults=d)

	if key=='0':
		RCStuL = RCStu.objects.all() 
		team = '所有'
		return render(request, 'roll_call/check/check.html', locals())

	else:
		RCStuL = RCStu.objects.filter(team=key) 
		team = '第' + RCStuL[0].team
		return render(request, 'roll_call/check/checkTeam.html', locals())

@login_required
def assignTeam(request, key):
	if request.POST:
		data = request.POST #all element of QuerySet is type of list, i dont know why but turn it into diction can disassembler its list into its origin type.
		data=data.dict()# turn Querydict into python's dict
		####Build default dict, if find data already exitst, than update the info. #####
		print(data)
		for i in data.items():
			#因為assignTeam顯示的會員資訊是帳號，也就是email，所以要先判斷是不是有包含@ (csrfToken沒有@)，若有則可以取出@前面的學號，再把學號存入roll_call當作key
			# _g代表是性別的資料
			if i[0].find('@') != -1 and i[1]!="":
				if '_team' in i[0]:
					default = {'team' : i[1]}
					obj, created = RCStu.objects.update_or_create(studentID = i[0].split('@')[0], defaults=default)
					# update_or_create will update exist data or create a new one if doesn't exist.
				elif '_name' in i[0]:
					default = {'name' : i[1]}
					obj, created = RCStu.objects.update_or_create(studentID = i[0].split('@')[0], defaults=default)

				else:
					# 代表是性別的資料
					default = {'gender' : i[1]}
					obj, created = RCStu.objects.update_or_create(studentID = i[0].split('@')[0], defaults=default)
	if request.GET!='' and 'major' in request.GET:
		m = request.GET.dict()['major']
		u = User.objects.filter(major=m)
		return render(request, 'roll_call/assignTeam/assignTeam.html', locals())

	if key=='0':
		# print(User._meta.get_all_field_names())
		return render(request, 'roll_call/assignTeam/assign.html', locals())

@login_required
def status(request, key):
	teamRange = range(1,95)
	if request.POST:
		data = request.POST 
		data=data.dict()
		rcs = RCStu.objects.get(studentID=data['stID']) 
		stustatus = StudentST.objects.create(RCStu=rcs, comment=data['cmt'], create=timezone.localtime(timezone.now()))

	if key=='0':
		RCStuL = RCStu.objects.all() 
		team = '所有'
		return render(request, 'roll_call/status/status.html', locals())

	else:
		RCStuL = RCStu.objects.filter(team=key) 
		team = '第' + RCStuL[0].team
		return render(request, 'roll_call/status/statusTeam.html', locals())

@login_required
def feedback(request, key):
	teamRange = range(1,95)
	if request.POST:
		data = request.POST 
		data=data.dict()
		rcs = RCStu.objects.get(studentID=(request.user.email).split('@')[0])
		# 想要知道request.user裏面有哪些值可以取用要看print(User._meta.get_all_field_names())  這些都是使用者帳號裏面有的資訊
		stufeedback = StudentFD.objects.create(RCStu=rcs, feedback=data['cmt'], create=timezone.localtime(timezone.now()))

	if key=='0':
		RCStuL = RCStu.objects.all() 
		team = '所有'
		return render(request, 'roll_call/feedback/feedback.html', locals())

	else:
		RCStuL = RCStu.objects.filter(team=key) 
		team = '第' + RCStuL[0].team
		return render(request, 'roll_call/feedback/feedbackTeam.html', locals())