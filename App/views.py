import hashlib
import random
import time
import uuid

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Lunbotu, Wenxuanjuji


def index(request):
    lunbotu = Lunbotu.objects.all()
    wenxuanjuji = Wenxuanjuji.objects.all()
    data = {
        'lunbotu': lunbotu,
        'wenxuanjuji': wenxuanjuji,
    }



    token = request.COOKIES.get('token')

    #获取token
    users = User.objects.filter(token=token)
    if users.exists():
        user = users.first()
        return render(request, 'index.html',context={'username': user.username,'lunbotu':lunbotu, 'wenxuanjuji':wenxuanjuji})

    return render(request, 'index.html',context=data)

    # return render(request, 'index.html')




# 生成token
def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    return md5.hexdigest()
#加密
def generate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return  sha.hexdigest()

def zhuce(request):
    if request.method == 'GET':
        return render(request, 'zhuce.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        tel = request.POST.get('tel')

        # 存入数据库
        try:
            user = User()
            user.username = username
            # 加密处理
            user.password = generate_password(password)
            user.tel = tel

            user.token = uuid.uuid5(uuid.uuid4(), 'zhuche')

            user.save()

            response = redirect('app:index')


            # 状态保持
            # request.session['username'] = username
            # request.session.set_expiry(60)

            response.set_cookie('token', user.token)

            return response
        except Exception as e:
            return HttpResponse('注册失败' + e)



    # return render(request, 'zhuce.html')


def denglu(request):

    if request.method == 'GET':
        return render(request, 'denglu.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = generate_password(request.POST.get('password'))

        users = User.objects.filter(username=username, password=password)
        if users.exists():
            user = users.first()

            user.token = generate_token()
            user.save()

            response = redirect('app:index')
            response.set_cookie('token', user.token)

            return response
        else:
            return HttpResponse('用户名或密码错误')
    # return render(request, 'denglu.html')


def gouwuche(request):
    return render(request, 'gouwuche.html')


def small(request,id):
    user = Wenxuanjuji.objects.filter(id=id).all().first()
    return render(request, 'small.html',context={'user':user})


def small1(request):
    return render(request, 'small1.html')


def logout(request):
    response = redirect('app:index')


    response.delete_cookie('token')


    return response
