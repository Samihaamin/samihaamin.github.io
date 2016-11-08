/*function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill('#FFFFFF');
  } else {
    fill('#FFE4E1');
  }
  //ellipse(mouseX, mouseY, 400, 400);
  if (mouseY > windowWidth/3){
  	ellipse(mouseX, mouseY+100, 500, 500);
  }

  if (mouseX > windowWidth/2){
  ellipse(mouseX-60, mouseY, 500, 500); }
  else if (mouseX < windowWidth/2){
  	  ellipse(mouseX+60, mouseY, 500, 500);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}  */

var totalPts = 200;
var steps = totalPts + 1;
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  frameRate(1.5);
} 

function draw() {
  background(255);
  var rand = 0;
  for  (var i = 1; i < steps; i++) {
    fill('#FFE4E1');
    ellipse( ((width/steps) * i), ((height/2) + random(-rand, rand)), 10,10 );
    fill(255);
    ellipse( ((width/steps) * i), ((height/2) + random(-rand, rand)), 6,16 );
    fill(240);
    ellipse( ((width/steps) * i), ((height/2) + random(-rand, rand)), 6,6 );
    rand += random(-65, 65);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}