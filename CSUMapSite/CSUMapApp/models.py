from django.db import models
#from django.contrib.postgres.fields import ArrayField

#class buildingCordinates(models.Model):
#     lat =  models.FloatField()
#     lng =  models.FloatField()
#     def __str__(self):
#	     return str(self.lat) + ',' + str(self.lng) 
#

class Building(models.Model):
	buildingName = models.CharField(max_length = 100)
	clubs =    models.TextField()
#	cordinates = models.ForeignKey(buildingCordinates)
	buildingDesc =  models.TextField()
	bUrl = models.TextField()
	def __str__(self):
		return self.buildingName



