# -*- coding: utf-8 -*-
from django.db import models
from datetime import datetime
# Create your models here.
class RCStu(models.Model):
  MALE = 'M'
  FEMALE = 'F'
  GENDER_CHOICES = (
    (MALE, 'Male'),
    (FEMALE, 'Female'),
  )
  # tuple的第一個元素是真正會被存入資料庫的資料，後面那個是顯示給人類看的
  gender = models.CharField(
      max_length=1,
      choices=GENDER_CHOICES,
      default=MALE,
  )
  studentID = models.CharField(max_length=20)
  name = models.CharField(max_length=10, default="Name")
  team = models.CharField(max_length=10)
  
  def __str__(self):
    return self.studentID+' 第'+self.team+'小隊'

  class Meta:
    permissions = (
      ("is_RC_staff", "是興鮮人的工作人員"),
    )

class RCRecord(models.Model):
  RCStu = models.ForeignKey(RCStu)
  RC_order = models.DecimalField(max_digits=2,decimal_places=0,default=1)
  create = models.DateTimeField()

  ROLLCALL_CHOICES = (
    (True,'出席', ),
    (False,'缺席', ),
  )
  present = models.BooleanField(choices=ROLLCALL_CHOICES,default=True)
  def __str__(self):
    return str(self.RCStu) + "在第" + str(self.RC_order) + "次點名" + "出席："+str(self.present)

class StudentST(models.Model):
  # 學員狀況
  RCStu = models.ForeignKey(RCStu)
  comment = models.CharField(max_length=100)
  create = models.DateTimeField()
  def __str__(self):
    return str(self.RCStu)

class StudentFD(models.Model):
  # RC回饋
  RCStu = models.ForeignKey(RCStu)
  feedback = models.CharField(max_length=100)
  create = models.DateTimeField()
  def __str__(self):
    return str(self.RCStu)