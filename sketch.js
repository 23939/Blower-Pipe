var Ball
var Blower
var BlowerMouth



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Ball.show()
  Blower.show()
  BlowerMouth.show()
}

function createButton() {
  button=createbutton("click to blow")
  button.position(width/2,height -100)
  button.class("blowButton")
  button.mousePressed(blow);
}

function blow(){
  Matter.Body.appliedForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}