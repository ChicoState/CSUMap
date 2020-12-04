from django.db import models

class Building(models.Model):
	buildingName = models.CharField(max_length = 100)
	clubs = models.TextField()

def __str__(self):
	return self.buildingName

# Create your models here.
