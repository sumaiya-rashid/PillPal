# backend/medications/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MedicationsViewSet

# Create a router and register your viewset
router = DefaultRouter()
router.register(r'medications', MedicationsViewSet, basename='medications')

# Include the router URLs
urlpatterns = [
    path('', include(router.urls)),
]
