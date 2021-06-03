import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 11, name: 'Gilgamesh', image: 'gilgamesh.png' },
      { id: 12, name: '3-D Man', image: '3-d-man.png' },
      { id: 13, name: 'Red Guardian', image: 'red-guardian.png' },
      { id: 14, name: 'Black Widow', image: 'black-widow.png' },
      { id: 15, name: 'Spider Man', image: 'spider-man.png' },
      { id: 16, name: 'Black Knight', image: 'black_knight.png' },
      { id: 17, name: 'Big Mother', image: 'big_mother.png' },
      { id: 18, name: 'Cerebra', image: 'cerebra.png' },
      { id: 19, name: 'CrossFire', image: 'crossfire.png' },
      { id: 20, name: 'Daredevil', image: 'daredevil.png' },
    ];

    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
