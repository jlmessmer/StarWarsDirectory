from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
import requests, json, sys

class Character:
    name = "blank"
    height = -1
    gender = "none"
    species = "unknown"
    char_id = -1

    def __init__(self, name, height, gender, species, char_id):
        self.name = name
        self.height = height
        self.gender = gender
        self.species = species
        self.char_id = char_id

# Create your views here.
def index(request):
    chars = []
    page = request.GET.get('page', default=1)

    data = requests.get("http://swapi.co/api/people/?page=" +str(page)).json()
    for i in range(0,10):
        char_id = -1
        try:
            tmp = data['results'][i]
            species_loc = tmp['species'][0]
            #print(species_loc)
            species = requests.get(species_loc).json()['name']
            char_id = tmp['url'].split('/')[-2]
            print(char_id)
            character = Character(tmp['name'], tmp['height'], tmp['gender'], species, char_id)
            chars.append(character)

        except IndexError:
            pass
    prev = int(page) - 1
    nxt = int(page) + 1
    return render(request, "directory/index.html", {
        'char_list': chars,
        'page': page,
        'next': str(nxt),
        'prev': str(prev),
        'max': 9
    })

def character(request, char_id):
    data = requests.get("http://swapi.co/api/people/" + str(char_id)).json()
    name = data['name']
    yob = data['birth_year']
    gender = data['gender']
    height = data['height']
    mass = data['mass']
    homeworld_loc = data['homeworld']
    known_vehicles_loc = data['vehicles']
    known_ships_loc = data['starships']

    homeworld = get_world(homeworld_loc)
    vehicles = get_vehicles(known_vehicles_loc)
    ships = get_ships(known_ships_loc)
    return render(request, "directory/character.html", {
        'name': name,
        'yob': yob,
        'gender': gender,
        'height': height,
        'mass': mass,
        'world': homeworld,
        'vehicles': vehicles,
        'ships': ships
    })

def get_world(loc):
    return requests.get(loc).json()['name']

def get_ships(locs):
    ships = []
    for loc in locs:
        ships.append(requests.get(loc).json()['name'])
    return ships

def get_vehicles(locs):
    vehicles = []
    for loc in locs:
        vehicles.append(requests.get(loc).json()['name'])
    return vehicles