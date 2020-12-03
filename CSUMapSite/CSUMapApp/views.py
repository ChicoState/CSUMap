from django.shortcuts import render
from django.http import HttpResponse
from .models import Building
from . import forms

def index(request):
    #endpoint = 'https://www.google.com/maps/embed/v1/view?key='
    #api_key = 'AIzaSyAhe-DDc6oPRLz3UtZcJWRJPGGkXY46w7g' # billing enabled api key
    #location = '39.730041,-121.846298'
    #loc_request = f'{api_key}&center={location}&zoom=17&maptype=satellite'

		#buildings = Building.objects.all().filter(duildingName = "O'Connell Center")
		buildings = Building.objects.get(buildingName = "O'Connell Center")
		return render(request, 'index.html', {'buildings': buildings})

def about(request):
	return render(request, 'about.html')

def home(request):
	return render(request, 'index.html')

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

