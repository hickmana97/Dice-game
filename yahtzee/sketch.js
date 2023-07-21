var diceArray = []
var buttonArray = []
var gameStarted
var rollButton
var rollCount

function setup() {
  createCanvas(600, 500);
  gameStarted = false
  rollCount = 3
  scoreCalc = new Score()
  dice1 = new dice(30, 250, 100, 10, '#E47673', '#b65e5c' );
  diceArray.push(dice1);
  dice2 = new dice(140, 250, 100, 10, '#C28DD0', '#9b71a6');
  diceArray.push(dice2);
  dice3 = new dice(250, 250, 100, 10, '#8CC0ED', '#709abe');
  diceArray.push(dice3);
  dice4 = new dice(360, 250, 100, 10, '#A0CCA2', '#80a382');
  diceArray.push(dice4);
  dice5 = new dice(470, 250, 100, 10, '#F8E698', '#c6b87a');
  diceArray.push(dice5);
  rollButton = new Button(197, 190, 200, 50, 20, '#E98683', '#E66966', 'ROLLS LEFT ' + rollCount);
  buttonArray.push(rollButton);
  resetButton = new Button(425, 190, 150, 50, 20, '#E98683', '#E66966', 'RESET')
  buttonArray.push(resetButton)
}

function draw() {
  background(220)
  rollButton.create()
  if(rollCount <= 0){
    resetButton.create()
  }
  for(let dice of diceArray){
    dice.createSquares();
    dice.drawDots();
  }
  text(scoreCalc.score, 297, 150)
}

function handleMouseOver(xPos, yPos, colour, wid, len){
  if(mouseX >= xPos & mouseX <= (xPos + len)){
      if(mouseY >= yPos & mouseY <= (yPos + wid)){
        fill(colour)
    }
  }
}

function mouseClicked(){
  if(mouseX >= rollButton.xPos & mouseX <= (rollButton.xPos + rollButton.buttonLength)){
    if(mouseY >= rollButton.yPos & mouseY <= rollButton.yPos + rollButton.buttonWidth){
      for(let dice of diceArray){
        //rerolls all unlocked dice as long as there are rolls left
        if(dice.locked === false & rollCount > 0){
        dice.chooseDots()
        }
      }
      if(rollCount > 0){
        rollCount -= 1
        rollButton.displayText = 'ROLLS LEFT ' + rollCount
      }
      if(rollCount === 0){
        scoreCalc.runScore()
      }
    }
  }
  
  for(let dice of diceArray){
    //locks dice face on mouse click
    if(mouseX >= dice.xPos & mouseX <= (dice.xPos + dice.size)){
      if(mouseY >= dice.yPos & mouseY <= (dice.yPos + dice.size)){
        if(dice.locked === false){
        dice.locked = true
        }
        else if (dice.locked === true){
        dice.locked = false
      }
      }
    }
  }
  
  if(mouseX >= resetButton.xPos & mouseX <= (resetButton.xPos + resetButton.buttonLength)){
    if(mouseY >= resetButton.yPos & mouseY <= (resetButton.yPos + resetButton.buttonWidth)){
      //resets the roll count and unlocks all dice
      rollCount = 3
      rollButton.displayText = 'ROLLS LEFT ' + rollCount
      for(let dice of diceArray){
        dice.locked = false
        dice.chooseDots()
      }
      scoreCalc.scoreReset()
    }
  }
}
