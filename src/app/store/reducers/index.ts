import * as fromHeroes from './heroes.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

// export interface State {
//   heroes: fromHeroes.HeroesState;
// }

export const reducer = {
  heroesReducer: fromHeroes.reducer
};

// export const getHeroesState = (state: State) => {
//   return state.heroes;
// };

// export const getAllHeroes = createSelector(getHeroesState, fromHeroes.getHeroes);
