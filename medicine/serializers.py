from rest_framework import serializers
from medicine.models import Medicines,Prescription

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicines
        fields=('med_name','manufacturer','price')

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields=('med_name','quantity','price')