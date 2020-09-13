import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {LinkedList} from '../../../data_structures/singly_linked_list/singly_linked_list'
import { DiceComponent } from './dice/dice.component';

@Component({
  selector: 'dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  

  public diceCollection:DiceComponent[] = [];

  amIRollingBro: boolean = false;

  constructor() { 
    this.diceCollection.push(new DiceComponent(6));
  }

  ngOnInit(): void {
  }

  rollDice() {
    this.amIRollingBro = true;
    const diceRollerStream = new Observable(() => {
      this.diceCollection.forEach((die) => {
        die.roll();
      });
    });

    const newRolls = diceRollerStream.subscribe();
   
    // Stop listening for die after 2.5 seconds
    setTimeout(() => {
      newRolls.unsubscribe();
      let newDiceCollection = []
      this.diceCollection.forEach(dice => {
      newDiceCollection.push(dice);
    })
    this.diceCollection = newDiceCollection;
    this.amIRollingBro = false;
    }, 2500);

  }

  public addDie(faceValue: number): void {

    let collectionIsValid = this.validateDicePool(faceValue);
 
    if(collectionIsValid) {
      this.diceCollection.push(new DiceComponent(faceValue))
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


