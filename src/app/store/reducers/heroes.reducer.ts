import * as fromActions from '../actions/heroes.actions';
import { Hero } from '../../models/hero';

export interface HeroesState {
  heroes: Hero[];
  hero: Hero;
}

export const INITIAL_HEROES_STATE: HeroesState = {
  heroes : [],
  hero: undefined
};

export function reducer(state: HeroesState = INITIAL_HEROES_STATE,
                        action: fromActions.Actions ): HeroesState {
           switch (action.type) {
              case fromActions.LOAD_HEROES:
                  return {
                   ...state
                  };
              case fromActions.LOAD_HEROES_SUCCESS:
              const heroes = action.payload;
                  return {
                    ...state,
                     heroes
                        };
              case fromActions.UPDATE_HEROES:
                   const hero = action.payload;
                   return {
                     ...state,
                     hero
                   };
                   case fromActions.UPDATE_HEROES_SUCCESS:
                  const newheroes = action.payload;
                   return {
                     ...state,
                     heroes: newheroes
                   };
  }
}

// export const getHeroes = (state: HeroesState) => {
//   console.log(state.heroes);
//       return state.heroes;
// };

