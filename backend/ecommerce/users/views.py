from django.conf import settings
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny
from users.models import User, Profile
from users.serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer
import shortuuid

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class ResetPasswordEmailVerificationView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def get_object(self):
        email = self.kwargs['email']
        user = User.objects.get(email=email)
        if user:
            user.reset_token = shortuuid.ShortUUID().random(length=7)
            user.save()
            create_password_url = f"{settings.FRONTEND_URL}/create-password?token={user.reset_token}&uid={user.id}"
            return user