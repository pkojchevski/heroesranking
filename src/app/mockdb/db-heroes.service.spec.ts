import { TestBed, inject } from '@angular/core/testing';

import { DbHeroesService } from './db-heroes.service';

describe('DbHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbHeroesService]
    });
  });

  it('should be created', inject([DbHeroesService], (service: DbHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
