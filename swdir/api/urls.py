from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'characters', views.CharacterViewSet, base_name="api")

urlpatterns = [
    url(r'^', include(router.urls)),
]