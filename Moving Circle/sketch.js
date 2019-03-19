var circleX = 50;
var circleY=50;

function setup() {
  createCanvas(600, 400);
   background(220, 250, 10);
  fill(250,200,200,100)
  ellipse(circleX,100,100,100)
}


function draw() {
 
  
  
   background(220, 250, 10);
  // Elliplse (Circle)
 // noStroke()
  fill(250,200,200)
  ellipse(circleX++, circleY++ ,100,100)

}

function mousePressed(){
  noStroke()
   fill(250,200,200,100)
  ellipse(mouseX,mouseY,100,100)
}