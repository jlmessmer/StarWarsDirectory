import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
