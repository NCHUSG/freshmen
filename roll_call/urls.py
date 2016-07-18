from django.conf.urls import patterns, url
import roll_call
urlpatterns = patterns('roll_call.views',
  url(r'^$','entry'),#這樣做似乎是對應到首頁
)