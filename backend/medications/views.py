from .models import Medications
from .serializers import MedicationsSerializer
from rest_framework import viewsets

class MedicationsViewSet(viewsets.ModelViewSet):
    queryset = Medications.objects.all()
    serializer_class = MedicationsSerializer
