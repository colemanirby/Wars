import {DIE_STYLE} from './dice-styles.component'

export class DiceComponent {

  public faceValue: number;

  public faceType: string;

  public currentRoll: number = 0;

  public diceStyleMap: Map<number, String>;

  public diceDisplay: String;

  public hasBeenRolled: boolean = false;

  constructor(type: number) {

    this.faceValue = type;
    this.faceType = "D-" + type;

    this.diceStyleMap = DIE_STYLE["D" + type.toString() + "_STYLES"];

    this.diceDisplay = this.diceStyleMap[type];

  }

  ngOnInit(): void {
  }

  async roll(): Promise<void> {
    //  for loop is used to display the random numbers to the user to simulate dice rolling
    for (var i = 0; i < 20; i++) {
      this.currentRoll = this.generateRandomNumber(1, this.faceValue + 1);
      this.diceDisplay = this.diceStyleMap[this.currentRoll];
      let offsetTime = this.generateRandomNumber(1, 101);
      await this.delay(50 + offsetTime);
    }
    this.currentRoll = this.generateRandomNumber(1, this.faceValue + 1);
    this.diceDisplay = this.diceStyleMap[this.currentRoll];
    this.hasBeenRolled = true;
    return Promise.resolve();
  }

  generateRandomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
