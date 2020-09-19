import { Component, OnInit} from '@angular/core';
import { DiceComponent } from './dice/dice.component';

@Component({
  selector: 'dice-roller-layout',
  templateUrl: './dice-roller-layout.component.html',
  styleUrls: ['./dice-roller-layout.component.css']
})
export class DiceRollerComponent implements OnInit {

  public outputDiceCollection: DiceComponent[] = [];

  amIRollingBro: boolean = false;

  ngOnInit(): void {
  }

  updateDiceHistory(updatedDice: DiceComponent[]): void {

    this.outputDiceCollection = updatedDice;

  }
  
}


