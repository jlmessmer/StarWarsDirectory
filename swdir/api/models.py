from django.db import models

# Create your models here.
class Character():
    def __init__(self, name, gender, mass, homeworld):
        self.name = name
        self.gender = gender
        self.mass = mass
        self.homeworld = homeworld

class CharacterList():
    def __init__(self, chars):
        self.chars = chars