from django import forms

class mapForm(forms.Form):
    buildingName = forms.CharField(
        label = "Enter the building name",
        required = False,
        max_length = 90, 
    )    
