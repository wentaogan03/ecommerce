from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView  
from users.models import User, Profile
from users.serializers import MyTokenObtainPairSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer