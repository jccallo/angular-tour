import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _listCharacters: Character[] = [
    {
      name: 'Goku',
      power: 2500,
    },
    {
      name: 'Vegeta',
      power: 2400,
    },
  ];

  get listCharacters(): Character[] {
    return [...this._listCharacters];
  }

  constructor() {
    console.log('servicio inicializado');
  }

  add(character: Character) {
    this._listCharacters.push(character);
  }
}
