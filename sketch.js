let theta

function setup() {
  createCanvas(400, 400);
  theta=0
}

function draw() {
  background(220);
  let basicSize = sin(theta)
  let realSize = map(basicSize, -1, 1, 10, 200)
  circle(width/2, height/2, realSize)
  theta+=0.01
}