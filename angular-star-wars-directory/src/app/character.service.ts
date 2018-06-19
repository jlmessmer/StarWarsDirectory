import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'http://127.0.0.1:8000/api/characters'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getCharacters(): Observable<Character[]>{
      return this.http.get<Character[]>(this.charactersUrl, this.httpOptions);
    }
  
    private log(message: string){
      this.messageService.add('CharacterService: ' + message);
    }
  
}
