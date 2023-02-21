from django.shortcuts import get_object_or_404

from rest_framework.response import Response
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
        password = request.data['account-password']
        account_id = request.data['account-id']

        return Response({
            'password': password,
            'acount_id': account_id,
        })


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

