import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterGameLayoutComponent } from './components/character-game/chracter-game-layout.component';
import { DiceComponent } from './components/character-game/dice/dice.component';
import { RollHistoryComponent } from './components/character-game/roll-history/roll-history.component';
import { DicePoolComponent } from './components/character-game/dice-pool/dice-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterGameLayoutComponent,
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
