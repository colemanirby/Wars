export class DiceComponent {
  
  public faceValue: number;

  public faceType: string;

  public currentRoll: number = 0;

  constructor(type: number) {

    this.faceValue = type;
    this.faceType = "D-"+type;

   }

  ngOnInit(): void {
  }

 async roll(): Promise<void> {
    //  for loop is used to display the random numbers to the user to simulate dice rolling
     for(var i=0; i<20; i++) {
      this.currentRoll = this.generateRandomNumber(1,this.faceValue + 1)
      let offsetTime = this.generateRandomNumber(1, 101);
      await this.delay(50 + offsetTime);
    }
    this.currentRoll = this.generateRandomNumber(1,this.faceValue + 1);
    return Promise.resolve();
  }

  generateRandomNumber(min, max): number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
