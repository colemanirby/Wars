
export class DiceComponent {
  
  public faceValue;

  public faceType;

  public currentRoll = 0;

  constructor(type: number) {

    this.faceValue = type;
    this.faceType = "D-"+type;

   }

  ngOnInit(): void {
  }

 async roll() {
    //  for loop is used to display the random numbers to the user to simulate dice rolling
     for(var i=0; i<20; i++) {
      this.currentRoll = this.generateRandomNumber(1,this.faceValue + 1)
      await this.delay(50);
    }
    
    this.currentRoll = this.generateRandomNumber(1,this.faceValue + 1);
  }

  generateRandomNumber(min, max): number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
