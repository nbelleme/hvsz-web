import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {GameComponent} from './game/game.component';
import {GameService} from './game/game.service';

import {FoodSupplyComponent} from './foodsupply/food-supply.component';
import {FoodSuppplyService} from './foodsupply/food-supply.service';
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    FoodSupplyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    MaterializeModule
  ],
  providers: [
    GameService,
    FoodSuppplyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
