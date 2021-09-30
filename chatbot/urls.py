from django.conf.urls import url 
from chatbot import views
from .views import medicineApi
from django.urls import path

urlpatterns=[
    
    path('disease/', medicineApi, name='disease')
    
]
