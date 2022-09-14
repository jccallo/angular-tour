import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor(
    private dbzService: DbzService
  ) {}

  add() {
    this.dbzService.add(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
