from django.shortcuts import render
from django.http import HttpResponse
from . import forms
def search(request):
    if request.method == "POST":    
        if 'search' in request.POST:
            mapFormIns = forms.mapForm(request.POST)
            if mapFormIns.is_valid():
                buildingN = mapFormIns.cleaned_data["buildingName"],
                buildingLocation = buildingN[0]
                buildingLatLng = buildingLocation.split(',');
                print(buildingLatLng)
                bLat =  buildingLatLng[0];
                bLng =  buildingLatLng[1];
                bname = "No name"
        elif 'buildingName' in request.POST:
                mapFormIns = forms.mapForm()
                bLat = ""
                bLng = ""
                bname = request.POST['buildingName']
        else:
            mapFormIns = forms.mapForm()
            bLat = ""
            bLng = ""
            bname = "No name"
    else:
        mapFormIns = forms.mapForm()
        bLat = ""
        bLng = ""
        bname = "No name"
    context ={
         "bnlat" : bLat,
         "bnlng" : bLng,
         "formIns": mapFormIns,
         "bname" : bname,
    }
    return render(request, 'index.html', context = context)


def about(request):
	return render(request, 'about.html')
