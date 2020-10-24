var moveX=0;
var moveY=2;

function setup() {
  createCanvas(400, 400);
  background(155,203,30);
}

function draw() {
  
  fill(100,100,50)
  ellipse(moveX,30,20,20);
  moveX  =moveX+1;

  fill(30,20,10);
  rect(40,moveY,20,20);
  moveY=moveY+1;

}
