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
  ellipse(mouseX, mouseY, 350, 350);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}