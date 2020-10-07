from django.shortcuts import render
from django.http import HttpResponse

def index(request):

    #endpoint = 'https://www.google.com/maps/embed/v1/view?key='
    #api_key = 'AIzaSyAhe-DDc6oPRLz3UtZcJWRJPGGkXY46w7g' # billing enabled api key
    #location = '39.730041,-121.846298'
    #loc_request = f'{api_key}&center={location}&zoom=17&maptype=satellite'
    return render(request, 'index.html')

def about(request):
	return render(request, 'about.html')
