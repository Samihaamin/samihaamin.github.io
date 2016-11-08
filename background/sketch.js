function setup() {
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
  	ellipse(mouseX, mouseY+100, 300, 300);
  }

  if (mouseX > windowWidth/2){
  ellipse(mouseX-60, mouseY, 300, 300); }
  else if (mouseX < windowWidth/2){
  	  ellipse(mouseX+60, mouseY, 300, 300);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}