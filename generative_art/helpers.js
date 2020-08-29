function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6;
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
}
function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return vertex(x, y);
}
function randomSelect() {
  const num = random(1);
  return num > 0.5 ? true : false;
}
function getRandomFromPallet() {
  return PALETTE[floor(random(0, PALETTE.length))];
}
