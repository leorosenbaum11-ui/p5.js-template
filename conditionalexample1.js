let posX
let posY
let hue

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	posY = height/2
	posX = 0
	hue = random(0, 360)
}

function draw() {
	colorMode(HSB)
	noStroke()
	fill(hue, 100, 100)
	circle(posX, posY, 20);
	posX+= 3

	if (posX >= width) {
		posX = 0
		hue = random(0, 360)
	}
}