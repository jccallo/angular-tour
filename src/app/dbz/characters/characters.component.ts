import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent{
  get listCharacters(): Character[] {
    return this.dbzService.listCharacters;
  }

  constructor(
    private dbzService: DbzService
  ) {}
}
