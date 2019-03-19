var randX1=0;
var randY1=0;

var randX2=0;
var randY2=0;

function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
 
  randX1=random(0,400)
  randY1=random(0,400)
  
	randX2=random(0,400)
  randY2=random(0,400)
	fill('red')
  line(randX1,randY1, randX2, randY2)

}

function mousePressed(){
 background(220) 
}