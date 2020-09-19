import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'dice-pool',
  templateUrl: './dice-pool.component.html',
  styleUrls: ['./dice-pool.component.css']
})
export class DicePoolComponent implements OnInit {

  public diceCollection:DiceComponent[] = [];

  @Output()
  diceUpdate = new EventEmitter<DiceComponent[]>()


  amIRollingBro: boolean = false;

  constructor() { 
    this.diceCollection.push(new DiceComponent(6))
  }

  ngOnInit(): void {
  }

  updateDice(): DiceComponent[] {
    let newDiceArray = []
    for(let die of this.diceCollection) {
      newDiceArray.push(die);
    }
    return newDiceArray;
  }

  async rollDice() {

    this.amIRollingBro = true;

    let promiseArray = this.buildDicePromiseArray();

    await Promise.all(promiseArray).then(() => {
      this.amIRollingBro = false;
      this.diceCollection = this.updateDice();
      this.diceUpdate.emit(this.diceCollection);
    });

  }

  buildDicePromiseArray(): Promise<void>[] {

    let promiseArray: Promise<void>[] = [];
    
    this.diceCollection.forEach(die => {
        let dieRollPromise = Promise.resolve(die.roll());
        promiseArray.push(dieRollPromise);
    });
    
    return promiseArray;

  }

  public addDie(faceValue: number): void {

    let collectionIsValid = this.validateDicePool(faceValue);
 
    if(collectionIsValid) {
      this.diceCollection.push(new DiceComponent(faceValue));
    }

  }

    deleteDie(dice: DiceComponent): void {
      this.diceCollection = this.diceCollection.filter(currentDie => {
        return dice !== currentDie;
      })
    }

    deleteAllDice(): void {
      this.diceCollection = []
    }

    validateDicePool(faceValue: number): boolean {
      let isCollectionValid = true;
      
      let collectionSize = this.diceCollection.length;
      let faceValues = 0;

      for(let die of this.diceCollection) {
        faceValues = faceValues + die.faceValue;
      }

      faceValues = faceValues + faceValue;

      if (collectionSize === 3) {
        alert("Max dice pool cannot exceed 3 dice");
        isCollectionValid = false;
      } else if (faceValues > 24) {
        alert("Dice values cannot exceed 24")
        isCollectionValid = false;
      }

      return isCollectionValid;

    }

}
