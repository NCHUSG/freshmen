from django.contrib import admin
from apps.roll_call.models import RCStu, RCRecord, StudentST, StudentFD
# Register your models here.
admin.site.register(RCStu)
admin.site.register(RCRecord)
admin.site.register(StudentST)
admin.site.register(StudentFD)