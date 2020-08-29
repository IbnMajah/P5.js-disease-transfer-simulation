let width = window.innerWidth;
let height = window.innerHeight;
let n = 0;
let c = 8;
function setup() {
  createCanvas(width, height);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB);
  background(20);
  //   frameRate(10);
}

function draw() {
  let a = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(a);
  let y = r * sin(a);
  fill(n % 256, 255, 255);
  noStroke();
  push();
  translate(width / 2, height / 2);
  ellipse(x, y, 10, 10);
  //   triangle(x, y, x + 8, y + 8, x - 8, y + 8);
  //   rotate(r % 180);
  //   triangle(x, y, x + 8, y + 8, x - 8, y + 8);
  pop();
  if (n < 2000) {
    n++;
  } else {
    noLoop();
  }
  //   console.log(`a: ${a} \nr: ${r} \nn: ${n} \n h: ${height}`);
}
