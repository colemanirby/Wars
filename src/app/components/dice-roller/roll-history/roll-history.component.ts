import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LinkedList } from 'src/data_structures/singly_linked_list/singly_linked_list';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'roll-history',
  templateUrl: './roll-history.component.html',
  styleUrls: ['./roll-history.component.css']
})
export class RollHistoryComponent implements OnInit, OnChanges{

  @Input()
  diceCollection: DiceComponent[];

  history: number

  public rollHistoryDisplay: number[][] = [[]];
  public rollHistoryLinked = new LinkedList<DiceComponent[]>();

  constructor() { }

  ngOnInit(): void {
    console.log('info')
  }

  ngOnChanges(): void {
    this.storeHistory(this.diceCollection);
  }

  storeHistory(diceCollection): void {
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

        innerNumberArray.push(diceComponent.currentRoll);

      }

    }
    
    outterArray.push(innerNumberArray);

    return outterArray;
 
  }

}
