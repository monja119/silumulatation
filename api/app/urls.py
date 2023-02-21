from django.urls import path, re_path, include
from django.http import request

from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

models = ['user', 'email', 'password', 'phone', 'picture']

# adding routers
for k in range(len(models)):
    eval("router.register('{}', {}ViewSet,basename='{}')".format(models[k], str(models[k]).capitalize(), models[k]) )

urlpatterns = [

    path('login/', LoginViewSet.as_view({"get":"post"}), name='login'),
    path('profile/<int:pk>/', UserViewSet.as_view({"get":"profile"}), name='profile'),

]

urlpatterns += router.urls