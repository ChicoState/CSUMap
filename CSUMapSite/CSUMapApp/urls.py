
from django.urls import path
from . import views
urlpatterns = [
    path('about', views.about, name = 'home'),
		path('distanceFinder', views.home, name = 'distanceFinder'),
		path('', views.search, name = 'search'),

]

