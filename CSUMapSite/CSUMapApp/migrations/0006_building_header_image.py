# Generated by Django 3.1.1 on 2020-12-09 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CSUMapApp', '0005_building_burl'),
    ]

    operations = [
        migrations.AddField(
            model_name='building',
            name='header_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
