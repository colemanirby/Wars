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

  rollDice(): void {

    this.currentRoll = this.generateRandomNumber(1,21);
    this.storeHistory(this.currentRoll)
  }


  generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
storeHistory(currentRoll): void {
  this.rollHistory.push(currentRoll)
}

rollQueue(): void {}
}

