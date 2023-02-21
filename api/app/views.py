from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.decorators import action

from rest_framework.permissions import AllowAny

from .serializers import *
from .models import *


class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        try :
            # getting email
            user_email = Email.objects.get(email=email)

            # getting user as the email foreign
            user = User.objects.get(id=email.user)

            # getting the password
            user_password = Password.objects.get(user=user.id)

            if check_password(password, user_password):
                token = TokenSerializer.get_token(user.id)
                # success login
                return Response(
                    {
                        'user data' :  user.data,
                        'token': token
                    }
                )

            else:
                # wrong password
                return Response(
                    'Wrong password'
                )

        except Email.DoesNotExist:
            return Response('Email does not exists')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, pk):
        queryset = User.objects.get(id=pk)
        serializer = UserSerializer(queryset, many=False)

        return Response(serializer.data)

class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer



class PasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer


class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

