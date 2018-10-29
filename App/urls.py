from django.conf.urls import url

from App import views

urlpatterns = {
    url(r'^$', views.index),
    url(r'^denglu/$', views.denglu),
    url(r'^gouwuche/$', views.gouwuche),
    url(r'^small/$', views.small),
    url(r'^small1/$', views.small1),
    url(r'^zhuce/$', views.zhuce),
}