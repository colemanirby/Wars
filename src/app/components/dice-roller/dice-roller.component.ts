import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  public currentRoll = 0;
  public rollHistory = [];
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
    this.rollHistory.push(currentRoll)
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}

