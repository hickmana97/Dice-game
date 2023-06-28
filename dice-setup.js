var diceArray = []


function setup() {
  createCanvas(600, 500);
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
  background(220);
  for(let object of diceArray){
    object.createSquares();
  }
  console.log(dice1.roll3)
  push()
  strokeWeight(15)
  for(let object of diceArray){
    point(object.roll3.dot1x, object.roll3.dot1y)
    point(object.roll3.dot2x, object.roll3.dot2y)
    point(object.roll3.dot3x, object.roll3.dot3y)
  }
  pop()
 
}

class dice{
  constructor(xPos, yPos, size, radius, colour){
    this.xPos = xPos
    this.yPos = yPos
    this.size = size
    this.radius = radius
    this.colour = colour
    this.assignedDots = []
    this.createDots()
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
    
    
  }
}

