class Score {
  constructor(){
    this.scoreReset()
  }
  
  scoreReset(){
    this.rollCountArray = []
    this.rollNumberArray = []
    this.hand = 'ROLL TO SCORE'
    this.score = 0
    this.oneCount = 0
    this.twoCount = 0
    this.threeCount = 0
    this.fourCount = 0
    this.fiveCount = 0
    this.sixCount = 0
  }

  runScore(){
    for(let dice of diceArray){
      if(dice.locked === true){
        this.rollNumberArray.push(dice.number)
      }
    }
    this.createHand()
    this.createScore()
  }
  
  createHand(){
    this.createCount()
    console.log(this.rollCountArray)
    for(let count of this.rollCountArray){
      if(count === 3){
        this.hand = '3 OF A KIND'
      }
      else if(count === 4){
        this.hand = '4 OF A KIND'
      }
      else if(count === 5){
        this.hand = 'YAHTZEE'
      }
    }
    this.checkFullHouse()
    this.checkStraights()
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
  
  checkFullHouse(){
    if(this.rollCountArray.includes(2) && this.rollCountArray.includes(3)){
      this.hand = 'FULL HOUSE'
    }
  }
  
  checkStraights(){
    if(this.rollNumberArray.includes(1) && this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4)){
      this.hand = 'SMALL STRAIGHT'
    }
    if(this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5)){
      this.hand = 'SMALL STRAIGHT'
    }
    if(this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5) && this.rollNumberArray.includes(6)){
      this.hand = 'SMALL STRAIGHT'
    }
    if(this.rollNumberArray.includes(1) && this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5)){
      this.hand = 'LARGE STRAIGHT'
    }
    if(this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5) && this.rollNumberArray.includes(6)){
      this.hand = 'LARGE STRAIGHT'
    }
  }
  
  createScore(){
    this.upperSection()
  }
  
  upperSection(){
    
  }
}

