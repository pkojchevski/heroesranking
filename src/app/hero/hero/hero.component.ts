import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../heroes-service/heroes.service';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../models/hero';

import { map, skip } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromAction from '../../store/actions/heroes.actions';
import * as fromReducer from '../../store/reducers';
import { HeroesState } from '../../store/reducers/heroes.reducer';
// import { getHeroes } from '../../store/reducers/heroes.reducer';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // heroes: Observable<Hero[]>;
   heroes: Hero[];

  constructor(private store: Store<HeroesState>) {

  }

  ngOnInit() {

    this.store.dispatch(new fromAction.LoadAllHeroes());
    // this.heroes = this.store.select(getHeroes).pipe(skip(1));
    this.store
    .subscribe(state => {
      // console.log('state:' + JSON.stringify(state));
          this.heroes = state['heroesReducer'].heroes;
    });

  }

  voteUp(hero: Hero) {
    hero.rating++;
    this.store.dispatch(new fromAction.UpdateHeroes(hero));
  }

  voteDown(hero: Hero) {
    hero.rating = hero.rating !== 0 ? hero.rating - 1 : 0;
    this.store.dispatch(new fromAction.UpdateHeroes(hero));

  }





}
