import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService} from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  onSelect(character: Character){
    this.selectedCharacter = character;
  }

  getCharacters(): void{
    this.characterService.getCharacters().subscribe(characters => this.characters = characters)
  }

  filter(planets, genders){
    let selectedPlanets = planets.selectedOptions._selection;
    selectedPlanets = Array.from(selectedPlanets);
    selectedPlanets = selectedPlanets.map(item => item['value']);

    let selectedGenders = genders.selectedOptions._selection;
    selectedGenders = Array.from(selectedGenders);
    selectedGenders = selectedGenders.map(item => item['value']);
    console.log(selectedGenders)

    for (let character of this.characters){
      if ($.inArray(character.homeworld, selectedPlanets) || $.inArray(character.gender, selectedGenders)){
        let classes = ('.' + character.homeworld + '.' + character.gender).replace('/', '\\/');
        console.log(classes)
        $(classes).slideUp();
      }
    }
  }
}
