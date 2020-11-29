var h, hangle;
var m, mangle;
var s, sangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}
function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  s = second();
  sangle = map(s, 0, 60, 0, 360)

  m = minute();
  mangle = map(m, 0, 60, 0, 360)

  h = hour();
  hangle = map(h % 12, 0, 12,0,360)

  push();
  rotate(sangle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0, 0, 100, 0)

  
  pop();

  push();
  rotate(mangle);
  stroke(0,0,255);
  strokeWeight(5);
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hangle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0, 0, 50, 0)
  pop();

  noFill();
  stroke(255,0,0);
  strokeWeight(5);
  arc(0, 0, 300, 300, 0, sangle);
  stroke(0,0,255);
  arc(0, 0, 290, 290, 0, mangle);
  stroke(0,255,0);
  arc(0, 0, 280, 280, 0, hangle);
  
}