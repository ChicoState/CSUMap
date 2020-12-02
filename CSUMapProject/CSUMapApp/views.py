from django.shortcuts import render
from django.http import HttpResponse
from . import forms 
def search(request):
    if request.method == "POST": 
        mapFormIns = forms.mapForm(request.POST)  
        if mapFormIns.is_valid():
            buildingN = mapFormIns.cleaned_data["buildingName"],   
            buildingLocation = buildingN[0]
            buildingLatLng = buildingLocation.split(','); 
            print(buildingLatLng)
            bLat =  buildingLatLng[0];
            bLng =  buildingLatLng[1];
    else:
        mapFormIns = forms.mapForm()
        bLat = ""
        bLng = ""
    print(bLng);
    context ={
         "bnlat" : bLat,
         "bnlng" : bLng, 
         "formIns": mapFormIns
    }
    return render(request, 'search.html', context = context)

def home(request):
    
	return render(request, 'index.html')

def about(request):
	return render(request, 'about.html')

def event(request):
    
	return render(request, 'events.html')
