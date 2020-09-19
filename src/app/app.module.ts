import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller-layout.component';
import { DiceComponent } from './components/dice-roller/dice/dice.component';
import { RollHistoryComponent } from './components/dice-roller/roll-history/roll-history.component';
import { DicePoolComponent } from './components/dice-roller/dice-pool/dice-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    RollHistoryComponent,
    DicePoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
