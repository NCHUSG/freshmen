# -*- coding: utf-8 -*-
from django.db import models
from datetime import datetime
# Create your models here.
class RCStu(models.Model):
  studentID = models.CharField(max_length=20)
  team = models.CharField(max_length=10)
  
  def __str__(self):
    return self.studentID+' '+self.team

class RCRecord(models.Model):
  RCStu = models.ForeignKey(RCStu)
  create = models.DateTimeField()
  present = models.BooleanField(default=True)
  def __str__(self):
    return self.RCStu+'在'+self.create+'出席：'+self.present