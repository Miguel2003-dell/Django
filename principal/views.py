from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return render(request, "principal/index.html", {})

def manifest (request):
    return render(request, "principal/manifest.json", {}) 

def serviceworker (request):
    return render(request, "principal/serviceworker.js", {}, content_type="text/javascript")