from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
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
            send_mail(
                'Reset Your Password',
                f'Click the link below to reset your password:\n\n{create_password_url}',
                settings.EMAIL_HOST_USER,
                [user.email],
            )
            return user


class PasswordChangeView(generics.UpdateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def put(self, request, *args, **kwargs):
        uid = request.data.get('uid')
        reset_token = request.data.get('reset_token')
        new_password = request.data.get('password')
        try:
            user = User.objects.get(id=uid, reset_token=reset_token)
            validate_password(new_password)
            user.set_password(new_password)
            user.reset_token = ''
            user.save()
            return Response({ 'message': 'Password reset successfully' }, status=status.HTTP_200_OK)
        except ValidationError:
            return Response({ 'message': 'Passowrd is not valid' }, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({ 'message': 'Password reset failed' }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)