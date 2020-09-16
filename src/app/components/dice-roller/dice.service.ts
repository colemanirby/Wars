import { Injectable } from '@angular/core';
import { DiceComponent } from './dice/dice.component';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  rollDice(dice: DiceComponent[]): Promise<void>[] {

    let promiseArray: Promise<void>[] = [];
    
    dice.forEach(die => {
        let dieRollPromise = Promise.resolve(die.roll());
        promiseArray.push(dieRollPromise);
    });
    
    return promiseArray;

  }

}
