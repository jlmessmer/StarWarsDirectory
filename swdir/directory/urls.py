from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('character/<int:char_id>/', views.character, name='character')
]