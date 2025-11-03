let spinAngle

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	spinAngle = (PI/4)
}

function draw() {
	push()
	noFill()
	stroke(255)
	translate(width/2, height/2)
	rotate(spinAngle)
	rectMode(CENTER)
	square(0, 0, 200)

    spinAngle += 0.01
}