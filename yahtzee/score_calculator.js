class Score {
  constructor(){
    this.scoreReset()
  }
  
  scoreReset(){
    this.rollCountArray = []
    this.rollNumberArray = []
    this.score = 'ROLL TO SCORE'
    this.oneCount = 0
    this.twoCount = 0
    this.threeCount = 0
    this.fourCount = 0
    this.fiveCount = 0
    this.sixCount = 0
  }

  runScore(){
    for(let dice of diceArray){
      this.rollNumberArray.push(dice.number)
    }
    this.createScore()
  }
  
  createScore(){
    this.createCount()
    for(let count of this.rollCountArray){
      if(count === 3){
        this.score = '3 OF A KIND'
      }
      else if(count === 4){
        this.score = '4 OF A KIND'
      }
      else if(count === 5){
        this.score = 'FULL HOUSE'
      }
    }
  }
  
  createCount(){
    for(let number of this.rollNumberArray){
      if(number === 1){
        this.oneCount ++
      }
      if(number === 2){
        this.twoCount ++
      }
      if(number === 3){
        this.threeCount ++
      }
      if(number === 4){
        this.fourCount ++
      }
      if(number === 5){
        this.fiveCount ++
      }
      if(number === 6){
        this.sixCount ++
      }
    }
    this.rollCountArray.push(this.oneCount, this.twoCount, this.threeCount, this.fourCount, this.fiveCount, this.sixCount)
  }
}
