import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { from, Observable } from 'rxjs';
import {LinkedList} from '../../../data_structures/singly_linked_list/singly_linked_list'
import { DiceService } from './dice.service';
import { DiceComponent } from './dice/dice.component';

@Component({
  selector: 'dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  

  public diceCollection:DiceComponent[] = [];
  private diceService: DiceService;
  public outputDiceCollection: DiceComponent[] = [];

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


