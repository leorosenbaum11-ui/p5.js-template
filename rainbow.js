let hue;
let sat;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	hue = map(mouseX, 0, width, 0, 360)
	sat = map(mouseY, 0, height, 0, 100)
	colorMode(HSB)
	fill(hue, sat, 100)
	
	noStroke()
	rectMode(CENTER)
	rect(mouseX, mouseY, 5, width*2);
}