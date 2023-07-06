var diceArray = []
var rollCount

function setup(){
  createCanvas(600, 500);
  background(220)
  rollCount = 3
  dice1 = new dice(30, 250, 100, 10, '#E47673');
  diceArray.push(dice1);
  dice2 = new dice(140, 250, 100, 10, '#C28DD0');
  diceArray.push(dice2);
  dice3 = new dice(250, 250, 100, 10, '#8CC0ED');
  diceArray.push(dice3);
  dice4 = new dice(360, 250, 100, 10, '#A0CCA2');
  diceArray.push(dice4);
  dice5 = new dice(470, 250, 100, 10, '#F8E698');
  diceArray.push(dice5);
}

function draw(){
  
}
