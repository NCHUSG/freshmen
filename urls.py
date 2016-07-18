from django.conf.urls import patterns, url
import apps.roll_call
from django.contrib.auth.views import login, logout

urlpatterns = patterns('apps.roll_call.views',
  url(r'^$','entry'),#這樣做似乎是對應到首頁
  url(r'^account/login', login, name="login"),
  url(r'^account/logout', logout, name="logout"),
)