from django.db import models
#from django.contrib.postgres.fields import ArrayField

class buildingCordinates(models.Model):
	lat =  models.FloatField()
	lng =  models.FloatField()

class Clubs(models.Model): 
	clubName = models.CharField(max_length = 50); 
	clubDesc =  models.TextField()


class Building(models.Model):
	buildingName = models.CharField(max_length = 100)
	clubs = models.ManyToManyField(Clubs)
	cordinates = models.ManyToManyField(buildingCordinates)
	buildingDesc =  models.TextField()
	def __str__(self):
		return self.buildingName




