class Score {
  constructor(){
    this.rollNumberArray = []
    this.createScore()
  }

  runScore(){
    for(let dice of diceArray){
      this.rollNumberArray.push(dice.number)
    }
    console.log(this.rollNumberArray)
  }
  
  createScore(){
    
  }
} 
