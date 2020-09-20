import { Component, OnInit} from '@angular/core';
import { DiceComponent } from '../../models/dice/dice.component';

@Component({
  selector: 'character-game-layout',
  templateUrl: './character-game-layout.component.html',
  styleUrls: ['./character-game-layout.component.css']
})
export class CharacterGameLayoutComponent implements OnInit {

  public outputDiceCollection: DiceComponent[] = [];

  ngOnInit(): void {
  }

  updateDiceHistory(updatedDice: DiceComponent[]): void {
    this.outputDiceCollection = updatedDice;
  }

}


