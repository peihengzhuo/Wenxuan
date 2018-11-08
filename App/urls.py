from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^denglu/$', views.denglu, name='denglu'),
    url(r'^gouwuche/$', views.gouwuche, name='gouwuche'),
    url(r'^small/(\d+)/$', views.small, name= 'small'),
    url(r'^small1/$', views.small1, name='small1'),
    url(r'^zhuce/$', views.zhuce, name='zhece'),
    url(r'^logout/$', views.logout, name='logout')
]