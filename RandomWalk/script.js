let width = window.innerWidth;
let height = window.innerHeight;
let walks = [];
function setup() {
  createCanvas(width, height);
  background(255);
  colorMode(HSB);
  for (let i = 0; i < 100; i++) {
    walks.push(new Walker());
    console.log(walks[i].col);
  }
}
function draw() {
  walks.forEach((w) => {
    w.step();
    w.display();
  });
}

class Walker {
  constructor() {
    this.x = Math.floor(random(width));
    this.y = Math.floor(random(height));
    this.col = color(random(255));
  }
  display() {
    stroke(random(360), 255, 255);
    strokeWeight(5);
    point(this.x, this.y);
  }
  step() {
    let choice = Math.floor(random(4));
    if (choice === 0) {
      this.x += 5;
    } else if (choice === 1) {
      this.x -= 5;
    } else if (choice === 2) {
      this.y += 5;
    } else {
      this.y -= 5;
    }
    // console.log(choice);
  }
}
