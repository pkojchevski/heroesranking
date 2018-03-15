import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class DbHeroesService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', rating: 0 },
      { id: 12, name: 'Narco', rating: 0 },
      { id: 13, name: 'Bombasto', rating: 0 },
      { id: 14, name: 'Celeritas', rating: 0 },
      { id: 15, name: 'Magneta', rating: 0 },
      { id: 16, name: 'RubberMan', rating: 0 },
      { id: 17, name: 'Dynama', rating: 0 },
      { id: 18, name: 'Dr IQ', rating: 0 },
      { id: 19, name: 'Magma', rating: 0 },
      { id: 20, name: 'Tornado', rating: 0 }
    ];
    return {heroes};
  }



  constructor() { }

}
