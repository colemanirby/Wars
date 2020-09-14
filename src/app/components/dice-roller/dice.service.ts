import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DiceComponent } from './dice/dice.component';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  rollDice(dice: DiceComponent[]): Promise<void>[] {

    let promiseArray: Promise<void>[] = [];
    
    dice.forEach(die => {
        let another = Promise.resolve(die.roll());
        promiseArray.push(another);
    });
    
    return promiseArray;

  }

}
