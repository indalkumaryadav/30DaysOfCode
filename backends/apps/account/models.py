from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import  ugettext_lazy as _

class CustomUserManager():
    pass

class Customer(AbstractUser):
    username=None
    email=models.EmailField(_('Email Address'),unique=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
    object=CustomUserManager()