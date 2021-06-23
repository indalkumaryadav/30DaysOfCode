from django.shortcuts import render

# Create your views here.

def homeView(req):
    return render(req,"index.html")