let theta
let theta2
let xPos

function setup() {
  createCanvas(400, 400);
  theta=0
  theta2 = PI/2
  colorMode(HSB)
  background(0);
  xPos = 0
}

function draw() {
  let hue = map(sin(theta2), -1, 1, 0, 360)
  noFill()
  stroke(hue, 100, 100)
  let basicSize = sin(theta)
  let realSize = map(basicSize, -1, 1, 10, 200)
  circle(xPos, height/2, realSize)
  theta+=0.1
  theta2+=0.01
  xPos += 1
}