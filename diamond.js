let theta
let spinAngle
let posX
let hue
let offset

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	spinAngle = (PI/4)
    posX = 0
    theta = 0
    hue = 165
    offset = random(0, 1000)
}

function draw() {
    hue = map(noise(offset), 0, 1, 130, 230)
    colorMode(HSB)
	push()
	noFill()
	stroke(hue, 100, 100)
	translate(posX, height/2)
	rotate(spinAngle)
	rectMode(CENTER)
    let sz = map(sin(theta), -1, 1, 20, 250)
	square(0, 0, sz)

    spinAngle += 0.1
    posX += 0.1
    theta += 0.5
    offset += 0.5
}

function mouseClicked() {
    //noLoop()
}