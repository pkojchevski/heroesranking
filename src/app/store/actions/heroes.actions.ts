import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const UPDATE_HEROES_SUCCESS = 'UPDATE_HEROES_SUCCESS';
export const UPDATE_HEROES = 'UPDATE_HEROES';


export class LoadAllHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadAllHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;

  constructor(public payload: Hero[]) {
  }
}

export class UpdateHeroes implements Action {
  readonly type = UPDATE_HEROES;
  constructor(public payload: Hero) {
  }
}

export class UpdateHeroesSuccess implements Action {
  readonly type = UPDATE_HEROES_SUCCESS;

  constructor(public payload: Hero[]) {
  }
}


// tslint:disable-next-line:no-unused-expression
export type Actions = LoadAllHeroes | LoadAllHeroesSuccess | UpdateHeroes | UpdateHeroesSuccess;
