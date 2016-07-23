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
  team = models.CharField(max_length=10)
  
  def __str__(self):
    return self.studentID+' 第'+self.team+'小隊'

class RCRecord(models.Model):
  RCStu = models.ForeignKey(RCStu)
  RC_order = models.DecimalField(max_digits=1,decimal_places=0,default=1)
  create = models.DateTimeField()
  present = models.BooleanField(default=True)
  def __str__(self):
    return str(self.RCStu) + "在第" + str(self.RC_order) + "次點名" + "出席："+str(self.present)