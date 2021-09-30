from django.db import models
from user.models import User
# Create your models here.
from user.models import *
class Medicines(models.Model):
    med_name= models.CharField(max_length=100)
    manufacturer= models.CharField(max_length=100)
    price=models.IntegerField()

class Prescription(models.Model):
    #file=models.FileField(upload_to="")
    id=models.IntegerField(primary_key=True)
    #user_med=models.ForeignKey(User,on_delete=models.CASCADE)
    date=models.DateField()
    med_name=models.CharField(max_length=100)
    quantity=models.IntegerField()
    price=models.IntegerField()
