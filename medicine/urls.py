from django.conf.urls import url 
from medicine import views
from .views import cart, pay, prescriptionApi
from django.urls import path

urlpatterns=[

    #url(r'^prescription/$',views.prescriptionApi),
    #url('fileupload/', views.prescriptionApi),
    path('fileupload/', prescriptionApi, name='prescription'),
    path('cart/', cart, name='cart'),
    path('pay/', pay, name='pay'),
    #url(r'^medicine/$',views.medicineApi),
    #url(r'^medicine/([0-9]+)$', views.medicineApi)
]
