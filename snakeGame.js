var s;
var scl;
var food;
s=new Snake();

function setup(){
	createCanvas(600,600);
	s=new Snake();
	frameRate(10);
pickLocation();
}
function pickLocation(){
	var cols=floor(width/scl);
	var rows=floor(height/scl);
	food=createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}
function draw(){
	background(51);
	s.death();
	s.update();
	s.show();
	if(s.eat(food)){
		food=pickLocation();

	}
	fill(255,0,100);
	rect(food.x,food.y,scl,scl);


}
function keyPressed(){
	if(keyCode==UP_ARROW){
		s.dir(0,-1);
	}else if(keyCode==DOWN_ARROW){
		s.dir(0,1);
	}else if(keyCode==RIGHT_A){
		s.dir(0,1);
	}else if(keyCode==LEFT_ARROW){
		s.dir(0,1);
	}
}
function Snake(){
	this.x=0;
	this.y=0;
	this.xspeed=1;
	this.yspeed=0;
	this.total=0;
	this.tail=[];




	this.eat=function(pos){
		var d=dist(this.x,this.y,pos.x,pos.y);
		if(d<1){
			this.total++;
			return true;
		}else{
			return false;
		}
	}
	this.dir=function(x,y){
		this.xspeed=x;
		this.yspeed=y;

	}
	this.death=function(){
		for (var i = 0;this.tail.length ; i ++) {
var pos=this.tail[i];
var d=dist(this.x,this.y,po.x,pos.y);
if(d<1){
	console.log('starting over');
	this.total=0;
	this.tail=[];

}		}
	}

	this.update=function(){
		for(var i=0;i<this.total-1;i++){
			this.tail[i]=this.tail[i+1];

			

		}
		this.tail[this.total-1]=createVector(this.x,this.y);
		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;

	}
	this.show=function(){
		fill(255);
		for(var i=0;i<this.total;i++){
		rect(this.tail[i].x,this.tail[i].y,10,10);

	}
	
}
