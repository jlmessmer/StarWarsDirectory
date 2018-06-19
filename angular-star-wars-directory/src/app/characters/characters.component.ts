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
}
