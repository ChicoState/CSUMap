from django.shortcuts import render
from django.http import HttpResponse





def index(request):
    return HttpResponse("The project is ready for us to work on")
