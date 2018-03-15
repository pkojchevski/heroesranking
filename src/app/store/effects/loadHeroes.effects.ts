import { Injectable } from '@angular/core';
import { HeroesService } from '../../heroes-service/heroes.service';
import { Effect, Actions } from '@ngrx/effects';
import * as fromActions from '../actions/heroes.actions';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()

export class LoadHeroesEffects {

  constructor(private heroesService: HeroesService, private actions$: Actions ) {

  }

  @Effect()
  heroes$ = this.actions$.ofType(fromActions.LOAD_HEROES).pipe(
      switchMap(() => {
         return this.heroesService.getHeroes()
         .pipe(
           map(heroes => new fromActions.LoadAllHeroesSuccess(heroes))
         );
      })
    );

    @Effect()
    updateHeroes$ = this.actions$
    .ofType(fromActions.UPDATE_HEROES)
    .pipe(
      map(action => action['payload']),
      switchMap(payload => {
         return this.heroesService.updateHeroes(payload)
         .pipe(
           switchMap(() => this.heroesService.getHeroes()),
           map(heroes => {
             heroes = heroes.sort((a, b) => b.rating - a.rating);
            return new fromActions.UpdateHeroesSuccess(heroes);
           })
          );
      })
      );





}
