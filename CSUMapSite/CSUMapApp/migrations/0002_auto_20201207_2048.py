# Generated by Django 3.1.1 on 2020-12-07 20:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CSUMapApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='building',
            name='clubs',
        ),
        migrations.RemoveField(
            model_name='building',
            name='cordinates',
        ),
    ]
