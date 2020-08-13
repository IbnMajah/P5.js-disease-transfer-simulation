/**A simulation for transmission by contact using particles */

let p = [];
let count = 1;
function setup() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  createCanvas(width, height);
  let len = Math.floor(width / 10);
  for (let index = 0; index < len; index++) {
    p.push(new Particle());
  }
  p[0].changeColor("rgba(255,0,0,.5)");
}
//
function draw() {
  let t = millis();
  background(0);
  fill("rgba(200, 200, 200, .7)");
  textSize(40);
  text("Count: " + count, 25, 35);
  text("Seconds: " + Math.floor(t / 1000), width - 250, 35);
  fill("rgba(200, 200, 200, .1)");
  text("Code By Ibn Majah (MagnificentTerminator)", width - 775, height - 20);
  for (var i = 0; i < p.length; i++) {
    p[i].update();
    // p[i].checkPositions(p.slice(i));
    p[i].draw();
    for (let k = 0; k < p.length; k++) {
      if (i != k && p[i].intersects(p[k]) && p[i].col != p[k].col) {
        p[i].changeColor("rgba(255,0,0,.5)");
        p[k].changeColor("rgba(255,0,0,.5)");
        count++;
      }
    }
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.col = "rgba(0, 255, 0, .5)";
    this.size = 8;
    this.alert = false;
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  draw() {
    noStroke();
    fill(this.col);
    circle(this.pos.x, this.pos.y, this.size);
  }

  checkPositions(particles) {
    particles.forEach((p) => {
      const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      if (d < 150) {
        stroke(this.col);
        line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      }
    });
  }
  changeColor(a) {
    this.col = a;
  }
  getColor() {
    return this.col;
  }
  intersects(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    return d < (this.size + other.size) / 2;
  }
}

// let x = 10.0; // X-coordinate
// let y = 100.0; // Y-coordinate
// let radius = 5.0; // Radius of the circle
// let speedX = 2; // Speed of motion on the x-axis
// let speedY = 2; // Speed of motion on the y-axis
// let directionX = 1; // Direction of motion on x-axis
// let directionY = -1; // Direction of motion on x-axis
// let width = window.innerWidth;
// let height = window.innerHeight;

// function setup() {
//   createCanvas(width, height);
//   // background(0);
//   smooth();
//   noStroke();
//   ellipseMode(RADIUS);
// }
// function draw() {
//   fill(0, 70);
//   rect(0, 0, width, height);
//   fill(255);
//   ellipse(x, y, radius, radius);
//   x += speedX * directionX;
//   if (x > width - radius || x < radius) {
//     directionX = -directionX; // Change direction
//   }
//   y += speedY * directionY;
//   if (y > height - radius || y < radius) {
//     directionY = -directionY; // Change direction
//   }
// }
