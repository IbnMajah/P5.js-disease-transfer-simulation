const width = window.innerWidth;
const height = window.innerHeight;
const CRYSTAL_SIZE = 500;
const SIZE = 6;
let PALETTE = [];

function setup() {
  createCanvas(width, height);
  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152), //blue
  ];
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background("teal");
  //   testLines();
  //   outlineShape();
  //   simpleLines();
  //   circles();
  let picker = random(1);
  if (picker > 0.3) {
    outlineShape();
  }

  picker = random(1);
  if (picker > 0.3) {
    simpleLines();
  }

  picker = random(1);
  if (picker > 0.3) {
    circles();
  }
}

function testLines() {
  let numShapes = randomSelect() ? SIZE : SIZE * 2;
  const strokeColor = getRandomFromPallet();
  noFill();
  stroke(PALETTE[0]);
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  stroke(strokeColor);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, 0, CRYSTAL_SIZE / 2);
    rotate(angle);
  }
  pop();
}

function circles() {
  const numShapes = SIZE;
  const angle = 360 / numShapes;
  const shapeSize = (CRYSTAL_SIZE / 2) * 0.66;
  const position = CRYSTAL_SIZE / 2 - shapeSize / 2;
  const strokeColor = getRandomFromPallet();

  stroke(strokeColor);
  strokeWeight(1);
  noFill();
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize);
    rotate(angle);
  }
  pop();
}

function simpleLines() {
  const stepsOut = 8;
  const numSteps = randomSelect() ? stepsOut : int(stepsOut * 1.25);
  const step = CRYSTAL_SIZE / 2 / numSteps;
  const start = floor(random(0, numSteps));
  const stop = floor(random(start, numSteps + 1));
  let numShapes = randomSelect() ? SIZE : SIZE * 2;
  const strokeColor = getRandomFromPallet();
  const angle = 360 / numShapes;
  const weigth = randomSelect() ? 1 : 3;

  noFill();
  stroke(strokeColor);
  stroke(strokeColor);
  push();
  translate(width / 2, height / 2);

  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0);
    rotate(angle);
  }
  pop();
}

function outlineShape() {
  const strokeColor = getRandomFromPallet();
  const weigth = randomSelect() ? 1 : 3;
  const hexagonTrue = randomSelect();
  stroke(strokeColor);
  strokeWeight(weigth);
  noFill();
  push();
  translate(width / 2, height / 2);
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2);
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  }
  pop();
}
