from django.contrib.auth.hashers import make_password, check_password

from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import *


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = '__all__'


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = '__all__'


class EmailEtudiantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailEtudiant
        fields = ['email']

class EmailEntrepriseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailEntreprise
        fields = ['email']


class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demande
        fields = '__all__'


class EntrepriseSerializer(serializers.ModelSerializer):
    email = EmailEntrepriseSerializer(many=True, required=False)
    class Meta:
        model = Entreprise
        fields = '__all__'


class OffreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields = '__all__'


class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = '__all__'


class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'


class AlternanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alternance
        fields = '__all__'


class HistorystudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historystudent
        fields = '__all__'


class EtudiantSerializer(serializers.ModelSerializer):
    email = EmailEtudiantSerializer(many=True, required=False)
    picture = PictureSerializer(many=True, required=False)
    class Meta:
        model = Etudiant
        fields = '__all__'


class CommentaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commentaire
        fields = '__all__'


class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = '__all__'


