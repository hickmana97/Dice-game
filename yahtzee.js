var diceArray = []
var gameStarted

function setup() {
  createCanvas(600, 500);
  background(220)
  gameStarted = false
  dice1 = new dice(30, 40, 100, 10, '#E47673');
  diceArray.push(dice1);
  dice2 = new dice(140, 40, 100, 10, '#C28DD0');
  diceArray.push(dice2);
  dice3 = new dice(250, 40, 100, 10, '#8CC0ED');
  diceArray.push(dice3);
  dice4 = new dice(360, 40, 100, 10, '#A0CCA2');
  diceArray.push(dice4);
  dice5 = new dice(470, 40, 100, 10, '#F8E698');
  diceArray.push(dice5);
}

function draw() {
  noLoop();
  drawInstruction();
  push();
  strokeWeight(15);
  for(let diceFace of diceArray){
    diceFace.createSquares();
    diceFace.drawDots();
  }
}

class dice{
  constructor(xPos, yPos, size, radius, colour){
    this.xPos = xPos
    this.yPos = yPos
    this.size = size
    this.radius = radius
    this.colour = colour
    this.createDots()
    this.chooseDots()
  }
  
  createSquares(){
    push()
    strokeWeight(1)
    stroke(this.colour)
    square(this.xPos, this.yPos, this.size, this.radius)
    pop()
  }
  
  createDots(){
    let dottl = [this.xPos + (this.size * 0.25), this.yPos + (this.size * 0.25)]
    let dottr = [this.xPos + (this.size * 0.75), this.yPos + (this.size * 0.25)]
    let dotml = [this.xPos + (this.size * 0.25), this.yPos + (this.size * 0.5)]
    let dotmm = [this.xPos + (this.size * 0.5), this.yPos + (this.size * 0.5)]
    let dotmr = [this.xPos + (this.size * 0.75), this.yPos + (this.size * 0.5)]
    let dotbl = [this.xPos + (this.size * 0.25), this.yPos + (this.size * 0.75)]
    let dotbr = [this.xPos + (this.size * 0.75), this.yPos + (this.size * 0.75)]
    this.roll1 = {
      dot1x : dotmm[0], 
      dot1y : dotmm[1]
    }
    
    this.roll2 = {
      dot1x : dottl[0],
      dot1y : dottl[1],
      dot2x : dotbr[0],
      dot2y : dotbr[1]
    }
    
    this.roll3 = {
      dot1x : dottl[0],
      dot1y : dottl[1],
      dot2x : dotmm[0], 
      dot2y : dotmm[1],
      dot3x : dotbr[0],
      dot3y : dotbr[1]
    }
    
    this.roll4 = {
      dot1x : dottl[0],
      dot1y : dottl[1],
      dot2x : dottr[0],
      dot2y : dottr[1],
      dot3x : dotbl[0],
      dot3y : dotbl[1],
      dot4x : dotbr[0],
      dot4y : dotbr[1]
    }
    
    this.roll5 = {
      dot1x : dottl[0],
      dot1y : dottl[1],
      dot2x : dottr[0],
      dot2y : dottr[1],
      dot3x : dotmm[0],
      dot3y : dotmm[1],
      dot4x : dotbl[0],
      dot4y : dotbl[1],
      dot5x : dotbr[0],
      dot5y : dotbr[1]
    }
    
    this.roll6 = {
      dot1x : dottl[0],
      dot1y : dottl[1],
      dot2x : dottr[0],
      dot2y : dottr[1],
      dot3x : dotml[0],
      dot3y : dotml[1],
      dot4x : dotmr[0],
      dot4y : dotmr[1],
      dot5x : dotbl[0],
      dot5y : dotbl[1],
      dot6x : dotbr[0],
      dot6y : dotbr[1]
    }
    
  }
  
  chooseDots(){
    let randomDots = floor(random(1, 7))
    //console.log(randomDots)
    if(randomDots === 1){
      this.assignedDots = this.roll1
    }
    if(randomDots === 2){
      this.assignedDots = this.roll2
    }
    if(randomDots === 3){
      this.assignedDots = this.roll3
    }
    if(randomDots === 4){
      this.assignedDots = this.roll4
    }
    if(randomDots === 5){
      this.assignedDots = this.roll5
    }
    if(randomDots === 6){
      this.assignedDots = this.roll6
    }
    //console.log(this.assignedDots)
  }
  
  drawDots(){
    if(this.assignedDots === this.roll1){
      point(this.roll1.dot1x, this.roll1.dot1y)
    }
    if(this.assignedDots === this.roll2){
      point(this.roll2.dot1x, this.roll2.dot1y)
      point(this.roll2.dot2x, this.roll2.dot2y)
    }
    if(this.assignedDots === this.roll3){
      point(this.roll3.dot1x, this.roll3.dot1y)
      point(this.roll3.dot2x, this.roll3.dot2y)
      point(this.roll3.dot3x, this.roll3.dot3y)
    }
    if(this.assignedDots === this.roll4){
      point(this.roll4.dot1x, this.roll4.dot1y)
      point(this.roll4.dot2x, this.roll4.dot2y)
      point(this.roll4.dot3x, this.roll4.dot3y)
      point(this.roll4.dot4x, this.roll4.dot4y)
    }
    if(this.assignedDots === this.roll5){
      point(this.roll5.dot1x, this.roll5.dot1y)
      point(this.roll5.dot2x, this.roll5.dot2y)
      point(this.roll5.dot3x, this.roll5.dot3y)
      point(this.roll5.dot4x, this.roll5.dot4y)
      point(this.roll5.dot5x, this.roll5.dot5y)
    }
    if(this.assignedDots === this.roll6){
      point(this.roll6.dot1x, this.roll6.dot1y)
      point(this.roll6.dot2x, this.roll6.dot2y)
      point(this.roll6.dot3x, this.roll6.dot3y)
      point(this.roll6.dot4x, this.roll6.dot4y)
      point(this.roll6.dot5x, this.roll6.dot5y)
      point(this.roll6.dot6x, this.roll6.dot6y)
    }
  }
}

function keyPressed(){
  if(keyCode === 32){
    for(let diceFace of diceArray){
      diceFace.chooseDots()
    }
  }
}

function drawInstruction(){
  if(gameStarted === false){
    push()
    textFont('Courier New')
    textSize(30)
    fill('red')
    textAlign(CENTER)
    text('Spacebar to Roll\nClick Dice to Dock', 300, 250)
    pop()
    gameStarted = true
  }
}


