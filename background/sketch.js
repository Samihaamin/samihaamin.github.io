var unit = 80;
var count;
var mods = [];
var range = 160;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  var wideCount = width / unit;
  var highCount = height / unit;
  count = wideCount * highCount;

  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2, 
        random(0.05, 1), unit);
    }
  }
}

function draw() {
  for (var i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
}

function Module(_xOff, _yOff, _x, _y, _speed, _unit) {
  this.xOff = _xOff;
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.speed = _speed;
  this.unit = _unit;
  this.xDir =1;
  this.yDir = 1;
}

Module.prototype.update = function() {
  this.x = this.x + (1 * this.xDir);
  if (this.x >= this.unit || this.x <= 0) {
    this.xDir *= -1;
    this.x = this.x + (1 * this.xDir);
    this.y = this.y + (1 * this.yDir);
  }
  if (this.y >= this.unit || this.y <= 0) {
    this.yDir *= -1;
    this.y = this.y + (1 * this.yDir);
  }
}
  function mouseMoved() {
  range = range + 5;
  if (range > 255) {
    range = 0;
  }
}
function touchMoved() {
  range = range + 5;
  if (range > 255) {
    range = 0;
  }
}
Module.prototype.draw = function() {
  fill(range,240,220);
  ellipse(this.xOff + this.x, this.yOff + this.y, 20, 20);
}
