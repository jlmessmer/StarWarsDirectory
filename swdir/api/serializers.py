from rest_framework import serializers
from .models import Character

class CharacterSerializer(serializers.Serializer):
    #id = serializers.IntegerField(read_only=true)
    name = serializers.CharField(max_length=256)
    gender = serializers.CharField(max_length=256)
    mass = serializers.IntegerField()
    homeworld = serializers.CharField(max_length=256)

