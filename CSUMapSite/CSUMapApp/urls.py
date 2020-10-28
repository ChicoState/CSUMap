
from django.urls import path
from . import views
urlpatterns = [
    path('', views.about, name = 'home'),
		path('distanceFinder', views.home, name = 'distanceFinder'),
		path('search', views.search, name = 'search'),

]

