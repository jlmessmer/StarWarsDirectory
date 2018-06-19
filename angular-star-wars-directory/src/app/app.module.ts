import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http' 
import { MatCardModule, MatButtonModule, MatListModule, MatGridListModule, MatToolbarModule } from '@angular/material'

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
