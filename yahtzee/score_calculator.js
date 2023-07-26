class Score {
  constructor(){
    this.scoreReset()
  }
  
  scoreReset(){
    this.rollCountArray = []
    this.rollNumberArray = []
    this.scoreCards = []
    this.hand = 'ROLL TO SCORE'
    this.diceNumberTotal = 0
    this.score = 0
    this.oneCount = 0
    this.twoCount = 0
    this.threeCount = 0
    this.fourCount = 0
    this.fiveCount = 0
    this.sixCount = 0
  }
  
  drawCards(){
    let x = 640
    let y = 50
    let offset = 80
    let space = 10
    let rWidth = 150
    let rHeight = 70
    for(let y = 0; y < 6; y++){
      rect(x, y * offset + space, rWidth, rHeight, 10)
    }
    this.drawScore(x, y, offset, space,rWidth)
  }
  
  drawScore(xPos, yPos, offset, space, rWidth){
    text(this.score, xPos + (rWidth/2), yPos)
    yPos = yPos * offset + space
  }

  runScore(){
    for(let dice of diceArray){
      this.diceNumberTotal += dice.number
      if(dice.locked === true){
        this.rollNumberArray.push(dice.number)
      }
    }
    this.createHand()
    this.createScore()
    console.log(this.score)
  }
  
  createHand(){
    this.createCount()
    console.log(this.rollCountArray)
    console.log(this.rollNumberArray)
    for(let count of this.rollCountArray){
      if(count === 3){
        this.hand = '3 OF A KIND'
        this.score = this.diceNumberTotal
      }
      else if(count === 4){
        this.hand = '4 OF A KIND'
        this.score = this.diceNumberTotal
      }
      else if(count === 5){
        this.hand = 'YAHTZEE'
        this.score = 50
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
      this.score = 25
    }
  }
  
  checkStraights(){
    if(this.rollNumberArray.includes(1) && this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4)){
      this.hand = 'SMALL STRAIGHT'
      this.score = 30
    }
    if(this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5)){
      this.hand = 'SMALL STRAIGHT'
      this.score = 30
    }
    if(this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5) && this.rollNumberArray.includes(6)){
      this.hand = 'SMALL STRAIGHT'
      this.score = 30
    }
    if(this.rollNumberArray.includes(1) && this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5)){
      this.hand = 'LARGE STRAIGHT'
      this.score = 40
    }
    if(this.rollNumberArray.includes(2) && this.rollNumberArray.includes(3) && this.rollNumberArray.includes(4) && this.rollNumberArray.includes(5) && this.rollNumberArray.includes(6)){
      this.hand = 'LARGE STRAIGHT'
      this.score = 40
    }
  }
  
  createScore(){
    //adds the upper section to the total score
    let numberTotals = []
    numberTotals.push(this.rollCountArray[0] * 1)
    numberTotals.push(this.rollCountArray[1] * 2)
    numberTotals.push(this.rollCountArray[2] * 3)
    numberTotals.push(this.rollCountArray[3] * 4)
    numberTotals.push(this.rollCountArray[4] * 5)
    numberTotals.push(this.rollCountArray[5] * 6)
    console.log(numberTotals)
    
    this.score += max(numberTotals)
  }
}

