import { Component, OnInit } from '@angular/core';
import {LinkedList} from '../../../data_structures/singly_linked_list/singly_linked_list'
import { DiceComponent } from './dice/dice.component';

@Component({
  selector: 'dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  public rollHistoryDisplay = [];
  public rollHistoryLinked = new LinkedList<number>();

  public diceCollection:DiceComponent[] = [];

  public amIRollingBro = false;

  constructor() { 
    this.diceCollection.push(new DiceComponent(6));
  }

  ngOnInit(): void {
  }

  async rollDice() {
    this.amIRollingBro = true;

    this.diceCollection.forEach(dice => dice.roll());


    // this.storeHistory(this.currentRoll);

    this.amIRollingBro = false;
  }

  public addDie(faceValue: number): void {
    this.diceCollection.push(new DiceComponent(faceValue))
  }

    deleteDie(dice: DiceComponent): void {
      this.diceCollection = this.diceCollection.filter(currentDie => {
        return dice !== currentDie;
      })
    }

    deleteAllDice(): void {
      this.diceCollection = []
    }

  // storeHistory(currentRoll): void {
  //   if(this.rollHistoryLinked.length() >= 4) {
  //     this.rollHistoryLinked.removeLast();
  //     this.rollHistoryLinked.insertFirst(currentRoll);
  //   } else {
  //     this.rollHistoryLinked.insertFirst(currentRoll);
  //   }
  //   this.rollHistoryDisplay = this.rollHistoryLinked.getList();
  // }

}


