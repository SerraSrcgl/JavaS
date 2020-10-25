var cir={x:30, y:50,diameter:100};

function setup(){
  createCanvas(400,400);
  
}

function draw(){
  background(20,102,30);
  fill(25,200,28);
  ellipse(cir.x,cir.y,cir.diameter,cir.diameter);
  
  cir.x=cir.x+1;
}
