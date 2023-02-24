from django.urls import path, re_path, include

from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

router = DefaultRouter()

models = ['etudiant', 'entreprise', 'emailetudiant', 'emailentreprise', 'picture', 'badge', 'demande',
          'offre', 'historystudent', 'avis', 'alternance', 'forum', 'commentaire', 'password', 'connexion']

# adding routers
for k in range(len(models)):
    eval("router.register('{}', {}ViewSet,basename='{}')".format(models[k], str(models[k]).capitalize(), models[k]) )

urlpatterns = [
    path('commentaire/get/<int:forum_id>', ForumViewSet.as_view({'get': 'get_comment'}), name='get_forum'),

    re_path('^new/entreprise/$', EntrepriseViewSet.as_view({'get': 'create'}), name='new_entreprise'),

    re_path('^new/etudiant/$', EtudiantViewSet.as_view({'get': 'post'}), name='new_etudiant'),

    re_path('^get_connected_user/$', ConnexionViewSet.as_view({'get': 'get_connected_user'}), name='get_connected_user'),
    re_path('^get_account_type/$', ConnexionViewSet.as_view({'get': 'get_connected_account'}), name='get_connected_account'),

    re_path('login', LoginViewSet.as_view({'get': 'post'}), name='login'),
]

urlpatterns += router.urls
