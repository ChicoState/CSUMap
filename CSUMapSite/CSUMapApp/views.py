from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Building
from . import forms

@csrf_exempt
def search(request):
    if request.method == "POST":    
        if 'search' in request.POST:
            mapFormIns = forms.mapForm(request.POST)
            if mapFormIns.is_valid():
                buildingN = mapFormIns.cleaned_data["buildingName"],
                buildingLocation = buildingN[0]
                buildingLatLng = buildingLocation.split(',')
                bLat =  buildingLatLng[0]
                bLng =  buildingLatLng[1]
                bname = buildingLatLng[2]
                buildings = Building.objects.get(buildingName = bname)
        elif 'buildingName' in request.POST:
                mapFormIns = forms.mapForm()
                bLat = ""
                bLng = ""
                bname = request.POST['buildingName']
                buildings = ""
        else:
            mapFormIns = forms.mapForm()
            bLat = ""
            bLng = ""
            bname = "No name 2"
            buildings = ""
    else:
        mapFormIns = forms.mapForm()
        bLat = ""
        bLng = ""
        bname = "No name 3"
        buildings = ""
    context ={
        "bnlat" : bLat,
        "bnlng" : bLng,
        "formIns": mapFormIns,
        "bnname" : bname,
		"buildings" : buildings
    }
    return render(request, 'index.html', context = context)


def about(request):
	return render(request, 'about.html')
