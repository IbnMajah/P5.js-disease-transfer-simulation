let x = 0;
let y = 0;
let spacing = 25;
let a = 0,
  b = 0,
  c = 0;
function setup() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  createCanvas(width, height);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(RGB, 100);
}
function draw() {
  strokeWeight(3);
  // fill(0, random(255), 0);
  if (random(1) < 0.5) {
    stroke(0, 256, 0);
    line(x, y, x + spacing, y + spacing);
  } else {
    stroke(0, 256, 0);
    line(x + spacing, y, x, y + spacing);
  }
  a += 10;
  if (a > 100) {
    a = 0;
    b += 10;
    if (b > 100) {
      b = 0;
      c += 10;
      if (c > 100) {
        c = 0;
      }
    }
  }
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
    // console.log(height, y);
  }
  if (y > height) {
    noLoop();
  }
}
