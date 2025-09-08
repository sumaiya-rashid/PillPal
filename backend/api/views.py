from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def home(request):
    return HttpResponse("Welcome to the PillPal API")

def hello(request):
    return JsonResponse({"message": "Hello, PillPal API"})