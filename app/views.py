from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework import viewsets

from .serializers import *
from .models import *


class LoginViewSet(viewsets.ModelViewSet):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer

    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        try:
            etudiant_email = EmailEtudiant.objects.get(email=email)

            # getting etudiant as the email foreign
            etudiant = Etudiant.objects.get(id=etudiant_email.etudiant.id)

            # getting the password
            etudiant_password = Password.objects.get(etudiant=etudiant).password

            if check_password(password, etudiant_password):
                etudiant = EtudiantSerializer(etudiant).data
                request.session['id'] = etudiant['id']
                request.session['compte'] = 'etudiant'

                return redirect('https://26e4-154-126-79-169.eu.ngrok.io/')

            else:
                # wrong password
                return Response(
                    'error : Email Etudiant, Wrong password'
                )
        except EmailEtudiant.DoesNotExist:
            try:
                entreprise_email = EmailEntreprise.objects.get(email=email)

                # getting etudiant as the email foreign
                entreprise = Entreprise.objects.get(id=entreprise_email.entreprise.id)

                # getting the password
                entreprise_password = PasswordEntreprise.objects.get(entreprise=entreprise)

                if check_password(password, str(entreprise_password)):
                    entreprise = EtudiantSerializer(entreprise).data
                    request.session['id'] = entreprise.id
                    request.session['compte'] = 'entreprise'

                    return HttpResponseRedirect(redirect('https://26e4-154-126-79-169.eu.ngrok.io/'))

                else:
                    # wrong password
                    return Response(
                        'Wrong password'
                    )

            except EmailEntreprise.DoesNotExist:
                return Response('Email does not exists')


def session_check(request):
    session = None
    try:
        session = request.session['id']
    except KeyError:
        session = None
    return session


class EtudiantViewSet(viewsets.ModelViewSet):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer

    def post(self, request):
        # request data
        etudiant_nom = request.data['nom']
        etudiant_prenom = request.data['prenom']
        etudiant_telephone = request.data['numero']
        etudiant_parcours = request.data['parcours']
        etudiant_matricule = request.data['matricule']
        etudiant_email = request.data['email']
        etudiant_password = request.data['password']


        etudiant = Etudiant()
        etudiant.name = etudiant_nom
        etudiant.prenom = etudiant_prenom
        etudiant.phone = etudiant_telephone
        etudiant.parcours = etudiant_parcours
        etudiant.matricule = etudiant_matricule
        etudiant.save()

        email = EmailEtudiant()
        email.email = etudiant_email
        email.etudiant = etudiant
        email.save()

        password = Password()
        password.password = make_password(etudiant_password, hasher="default")
        password.etudiant = etudiant
        password.save()

        return Response(
            {
                'name': etudiant.name,
                'matricule': etudiant_matricule,
                'email': etudiant_email,
            }
        )

    def get(self, request, pk):
        queryset = Etudiant.objects.get(id=pk)
        serializer = EtudiantSerializer(queryset, many=False)

        return Response(serializer.data)


class EntrepriseViewSet(viewsets.ModelViewSet):
    queryset = Entreprise.objects.all()
    serializer_class = EntrepriseSerializer

    def create(self, request, *args, **kwargs):
        return Response('hello')

class BadgeViewSet(viewsets.ModelViewSet):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer


class DemandeViewSet(viewsets.ModelViewSet):
    queryset = Demande.objects.all()
    serializer_class = DemandeSerializer

class OffreViewSet(viewsets.ModelViewSet):
    queryset = Offre.objects.all()
    serializer_class = OffreSerializer


class EmailetudiantViewSet(viewsets.ModelViewSet):
    queryset = EmailEtudiant.objects.all()
    serializer_class = EmailEtudiantSerializer


class EmailentrepriseViewSet(viewsets.ModelViewSet):
    queryset = EmailEntreprise.objects.all()
    serializer_class = EmailEntrepriseSerializer


class HistorystudentViewSet(viewsets.ModelViewSet):
    queryset = Historystudent.objects.all()
    serializer_class = HistorystudentSerializer


class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer


class AlternanceViewSet(viewsets.ModelViewSet):
    queryset = Alternance.objects.all()
    serializer_class = AlternanceSerializer



class PasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer


class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class CommentaireViewSet(viewsets.ModelViewSet):
    queryset = Commentaire.objects.all()
    serializer_class = CommentaireSerializer


class ForumViewSet(viewsets.ModelViewSet):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

    def get(self, request, pk):
        queryset = Forum.objects.get(id=pk)
        serializer = ForumSerializer(queryset, many=False)

        return Response(serializer.data)

    def get_comment(self, request, forum_id):
        queryset = Forum.objects.get(id=forum_id)
        serializer = ForumSerializer(queryset, many=False)

        commentaire = Commentaire.objects.filter(forum=queryset)
        commentaire_serializer = CommentaireSerializer(commentaire, many=True)

        return Response(commentaire_serializer.data)


class ConnexionViewSet(viewsets.ModelViewSet):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer

    def get_connected_user(self, request):

        try:
            session_id = request.session['id']

            queryset = Etudiant.objects.get(id=session_id)
            serializer = EtudiantSerializer(queryset, many=False).data

            return Response(serializer)

        except KeyError:
            return redirect('https://26e4-154-126-79-169.eu.ngrok.io/login/')

