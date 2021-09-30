from rest_framework import serializers
from chatbot.models import Disease

class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields=('disease','disease_desc')