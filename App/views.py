from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')


def denglu(request):
    return render(request, 'denglu.html')


def gouwuche(request):
    return render(request, 'gouwuche.html')


def small(request):
    return render(request, 'small.html')


def small1(request):
    return render(request, 'small1.html')


def zhuce(request):
    return render(request, 'zhuce.html')