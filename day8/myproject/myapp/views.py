from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse
# Create your views here.


def home(request):
    user=User.objects.get(id=2)
    data=User.objects.filter(page__user=user)
    post=User.objects.filter(post__user=user)
    song=User.objects.filter(song__user=user)
    print(data)

    return render(HttpResponse("indal kumar"))