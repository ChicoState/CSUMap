from django.shortcuts import render
from django.http import HttpResponse
from . import forms 
def index(request):
    if request.method == "POST": 
        mapFormIns = forms.mapForm(request.POST)  
        if mapFormIns.is_valid():
            buildingN = mapFormIns.cleaned_data["buildingName"],   
            buildingName = buildingN[0]
            buildingName = buildingName.replace(" ", "")
            buildingName = buildingName.lower()   
    else:
        mapFormIns = forms.mapForm()
        buildingName = ""
    context ={
        "mapForm" : mapFormIns,
         "bn" : buildingName
    }
    return render(request, 'index.html', context = context)

def about(request):
	return render(request, 'about.html')
