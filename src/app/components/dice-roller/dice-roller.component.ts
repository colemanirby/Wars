import { Component, OnInit } from '@angular/core';
import {LinkedList} from '../../../data_structures/singly_linked_list/singly_linked_list'
import {Node} from '../../../data_structures/singly_linked_list/node'

@Component({
  selector: 'dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  public currentRoll = 0;
  public rollHistoryDisplay = [];
  public rollHistoryLinked = new LinkedList();
  constructor() { }

  ngOnInit(): void {
  }

  async rollDice() {

    for(var i=0; i<10; i++) {
      this.currentRoll = this.generateRandomNumber(1,21)
      await this.delay(100);
    }

    this.currentRoll = this.generateRandomNumber(1,21);
    this.storeHistory(this.currentRoll)
  }


  generateRandomNumber(min, max): number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  storeHistory(currentRoll): void {
    if(this.rollHistoryLinked.length() >= 4) {
      this.rollHistoryLinked.removeLast();
      this.rollHistoryLinked.insertFirst(currentRoll);
    } else {
      this.rollHistoryLinked.insertFirst(currentRoll);
    }
    console.log('added new node');
    this.rollHistoryLinked.listContents()
    this.rollHistoryDisplay = this.rollHistoryLinked.getList();
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}


