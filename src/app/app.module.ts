import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbHeroesService } from './mockdb/db-heroes.service';
import { HeroComponent } from './hero/hero/hero.component';
import { HeroesService } from './heroes-service/heroes.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './store/reducers';
import * as effects from './store/effects';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DbHeroesService, { dataEncapsulation: false }),
      StoreModule.forRoot(fromReducer.reducer),
      EffectsModule.forRoot(effects.effects)
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
