from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=256)
    tel = models.IntegerField(max_length=20, unique=True)

    token = models.CharField(max_length=256, default='')