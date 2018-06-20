import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Character } from '../character';
import { CharacterService} from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  characters: Character[];
  selectedCharacter: Character;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private characterService: CharacterService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getCharacters();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onSelect(character: Character){
    this.selectedCharacter = character;
  }

  getCharacters(): void{
    this.characterService.getCharacters().subscribe(characters => this.characters = characters)
  }

  filter(planets, genders){
    console.log('hello')
    let selectedPlanets = planets.selectedOptions._selection;
    selectedPlanets = Array.from(selectedPlanets);
    selectedPlanets = selectedPlanets.map(item => item['value']);

    let selectedGenders = genders.selectedOptions._selection;
    selectedGenders = Array.from(selectedGenders);
    selectedGenders = selectedGenders.map(item => item['value']);
    let classes = '.';

    if(selectedPlanets.length <= 0 && selectedGenders.length <= 0){
      console.log(0)
      $('app-character-detail').slideDown();
    } else {
      if (selectedPlanets.length > 0 && selectedGenders.length <= 0) {
        console.log(1)
        for (let planet of selectedPlanets) {
          classes += planet + ', .'
        }
      } else if (selectedPlanets.length <= 0 && selectedGenders.length > 0) {
        console.log(2)
        for (let gender of selectedGenders) {
          classes += gender.replace('/', '\\/') + ', .'
        }
      } else {
        console.log(3)
        for (let planet of selectedPlanets){
            for (let gender of selectedGenders){
              classes += planet + '.' + gender.replace('/', '\\/') + ', .'
            }  
          }
        }
      classes = classes.slice(0, -3)
      console.log(classes)
      $('app-character-detail').slideUp();
      $(classes).slideDown()
    } 
  }
}
