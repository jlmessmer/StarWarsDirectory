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
    if(selectedPlanets.length <= 0 && selectedGenders.length <= 0){
      $('app-character-detail').slideDown();
    } else {
      let classes = '.';
      for (let planet of selectedPlanets){
        for (let gender of selectedGenders){
          classes += planet + '.' + gender + ', .'
        }
      }
      classes = classes.slice(0, -3)
      $('app-character-detail').slideUp();
      $(classes).slideDown()
    }
  }
}
