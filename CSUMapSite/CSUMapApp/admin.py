from django.contrib import admin

# Register your models here.
from django.contrib import admin
from . import models 
admin.site.register(models.Building)
admin.site.register(models.buildingCordinates)

