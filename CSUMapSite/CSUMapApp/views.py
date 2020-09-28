from django.shortcuts import render
from django.http import HttpResponse

def index(request):

    endpoint = 'https://www.google.com/maps/embed/v1/view?key='
    api_key = 'AIzaSyAhe-DDc6oPRLz3UtZcJWRJPGGkXY46w7g' # billing enabled api key
    location = '39.730041,-121.846298'
    loc_request = f'{api_key}&center={location}&zoom=17&maptype=satellite'
    request = endpoint + loc_request
    htmlrequest = f"""<iframe
    width="1000"
    height="800"
    frameborder="0" style="border:0"
    src="{request}" allowfullscreen center="{location}"
    </iframe>
    """

    return HttpResponse(htmlrequest)
