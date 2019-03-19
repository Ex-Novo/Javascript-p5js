var col=0;
var canvasWidth = 600;
var canvasHeight = 400;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  col=map(mouseX, 0, 600, 0, 255)
  background(col);
  
 /* fill('red')
  stroke(255)
  ellipse(mouseX, 200, 50, 50)
  */
  
  fill('red')
  stroke(255)
  ellipse(mouseX, mouseY, random(100), random(100))
}