import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero';

import { catchError, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroesService {


private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  updateHeroes(hero: Hero) {
    return this.http.put(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
