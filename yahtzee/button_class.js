class Button{
  constructor(xPos, yPos, buttonLength, buttonWidth, radius, colour, mouseOverColour, displayText){
    this.xPos = xPos
    this.yPos = yPos
    this.buttonLength = buttonLength
    this.buttonWidth = buttonWidth
    this.radius = radius
    this.colour = colour
    this.mOColour = mouseOverColour
    this.displayText = displayText
  }
  
  create(){
    push()
    fill(this.colour)
    handleMouseOver(this.xPos, this.yPos, this.mOColour, this.buttonWidth, this.buttonLength)
    stroke('black')
    strokeWeight(2)
    this.shape = rect(this.xPos, this.yPos, this.buttonLength, this.buttonWidth, this.radius)
    pop()
    this.createText()
  }
  
  createText(){
    push()
    textFont('Courier New')
    textSize(25)
    textAlign(CENTER)
    textStyle(BOLD)
    this.buttonText = text(this.displayText, this.xPos + (this.buttonLength / 2), this.yPos + (this.buttonWidth / 1.60))
  }
}
