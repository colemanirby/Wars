import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharacterGameLayoutComponent} from './components/character-game/chracter-game-layout.component';
import {DiceComponent} from './models/dice/dice.component';
import {RollHistoryComponent} from './components/roll-history/roll-history.component';
import {DicePoolComponent} from './components/dice-pool/dice-pool.component';
import {NarratorGameComponent} from './components/narrator-game/narrator-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterGameLayoutComponent,
    RollHistoryComponent,
    DicePoolComponent,
    NarratorGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
