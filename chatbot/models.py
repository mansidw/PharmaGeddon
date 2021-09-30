from django.db import models
from user.models import User
# Create your models here.

class Disease(models.Model):
    user_dis=models.ForeignKey(User,on_delete=models.CASCADE)
    disease= models.CharField(max_length=100)
    disease_desc=models.CharField(max_length=3000)
