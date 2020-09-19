import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DiceService } from '../dice.service';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'dice-pool',
  templateUrl: './dice-pool.component.html',
  styleUrls: ['./dice-pool.component.css']
})
export class DicePoolComponent implements OnInit {

  public diceCollection:DiceComponent[] = [];
  private diceService: DiceService;
  public outputDiceCollection: DiceComponent[] = [];

  @Output()
  diceUpdate = new EventEmitter<DiceComponent[]>()


  amIRollingBro: boolean = false;

  constructor(diceService: DiceService) { 
    this.diceCollection.push(new DiceComponent(6))
    this.diceService = diceService;
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

    let promiseArray = this.diceService.rollDice(this.diceCollection);

    await Promise.all(promiseArray).then(() => {
      this.amIRollingBro = false;
      this.diceCollection = this.updateDice();
      this.outputDiceCollection = this.diceCollection;
      this.diceUpdate.emit(this.outputDiceCollection);
    });

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
