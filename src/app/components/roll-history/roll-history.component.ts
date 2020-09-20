import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LinkedList } from 'src/data_structures/singly_linked_list/singly_linked_list';
import { DiceComponent } from '../../models/dice/dice.component';

@Component({
  selector: 'roll-history',
  templateUrl: './roll-history.component.html',
  styleUrls: ['./roll-history.component.css']
})
export class RollHistoryComponent implements OnInit, OnChanges{

  @Input()
  diceCollection: DiceComponent[];

  public rollHistoryDisplay: number[][] = [[]];
  public rollHistoryLinked = new LinkedList<DiceComponent[]>();
  private initialized = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.initialized && this.diceCollection.length > 0) {
      let newDiceArray = this.createNewDiceArray();
      this.storeHistory(newDiceArray);
    } else {
      this.initialized = true;
    }

  }

  createNewDiceArray() {
    const newDiceArray:DiceComponent[] = []
    this.diceCollection.forEach(die => {
      newDiceArray.push(Object.assign({}, die));
    })

    return newDiceArray;
  }

  storeHistory(diceCollection: DiceComponent[]): void {
    if(this.rollHistoryLinked.length() >= 4) {
      this.rollHistoryLinked.removeLast();
      this.rollHistoryLinked.insertFirst(diceCollection);
    } else {
      this.rollHistoryLinked.insertFirst(diceCollection);
    }
    this.rollHistoryDisplay = this.getDiceHistoryDisplay();
  }

  getDiceHistoryDisplay(): number[][] {

    let innerNumberArray = [];
    let outterArray = [];

    let linkedListArray = this.rollHistoryLinked.getList();

    for (let dieArray of linkedListArray){
      for (let diceComponent of dieArray) {

        innerNumberArray.push(" "+diceComponent.currentRoll + " "+ diceComponent.faceType+" ");

      }
      outterArray.push("["+innerNumberArray+"]");
      innerNumberArray = [];
    }

    return outterArray;

  }

}
