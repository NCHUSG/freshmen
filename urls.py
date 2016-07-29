from django.conf.urls import patterns, url
import apps.roll_call
from django.contrib.auth.views import login, logout

urlpatterns = patterns('apps.roll_call.views',
  url(r'^$','entry' , name='entry'),
  url(r'^check/(?P<key>\d{1,5})/$','check',name='check'),
  url(r'^status/(?P<key>\d{1,5})/$','status',name='status'),
  url(r'^feedback/(?P<key>\d{1,5})/$', 'feedback', name="feedback"),
  url(r'^assignTeam/$', 'assignTeam', name="assignTeam"),
  url(r'^account/login/', login, name="login"),
  url(r'^account/logout/', logout, name="logout"),
)