from django.contrib import admin
from . import models 
admin.site.register(models.Building)
admin.site.register(models.buildingCordinates)
admin.site.register(models.Clubs)

# Register your models here.
