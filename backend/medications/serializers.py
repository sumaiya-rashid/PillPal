from rest_framework import serializers
from .models import Medications

class MedicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medications
        fields = '__all__'