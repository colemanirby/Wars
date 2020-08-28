import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { DiceComponent } from './components/dice-roller/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
