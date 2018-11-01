from django.db import models

# Create your models here.

# 用户
class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=256)
    tel = models.IntegerField(unique=True)

    token = models.CharField(max_length=256, default='')




class Wenxuanjuji(models.Model):
    img = models.CharField(max_length=200)
    span = models.CharField(max_length=200)
    b = models.CharField(max_length=200)
    i = models.CharField(max_length=200)
    smallImg = models.CharField(max_length=200)
    bigImg = models.CharField(max_length=200)
    h1 = models.CharField(max_length=200)
    h3 = models.CharField(max_length=200)
    unit = models.CharField(max_length=200)
    unm = models.IntegerField()

class Lunbotu(models.Model):
    img = models.CharField(max_length=200)
    img2 = models.CharField(max_length=200)



