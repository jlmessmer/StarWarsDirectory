from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .models import Character, CharacterList
from .serializers import CharacterSerializer
import requests

# Create your views here.
class CharacterViewSet(viewsets.ViewSet):

    serializer_class = CharacterSerializer

    def list(self, request):
        data = requests.get("http://swapi.co/api/people/").json()
        characters = data['results']
        character_array = []
        for character in characters:
            homeworld = requests.get(character['homeworld']).json()['name']
            tmp_char = Character(character['name'], character['gender'], character['mass'], homeworld)
            character_array.append(tmp_char)

        serializer =  CharacterSerializer(character_array, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        character = requests.get("http://swapi.co/api/people/" + pk).json()
        homeworld = requests.get(character['homeworld']).json()['name']
        tmp_char = Character(character['name'], character['gender'], character['mass'], homeworld)

        serializer =  CharacterSerializer(tmp_char)
        return Response(serializer.data)


    # serializer_class = CharacterSerializer
