let twitchX;
let twitchY;
let flyX;
let flyY;
let offsetX
let offsetY

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(127);
	twitchX = random(200, width - 200);
	flyX = random(200, width - 200);
	twitchY = random(width/3, height - 200);
	flyY = random(width/3, height - 200);
	offsetX = random(0, 1000)
	offsetY = random(0, 1000)
    fill(255, 0, 0)
    rectMode(CORNER)
    rect(0, 0, width, height/4)
    textAlign(CENTER, TOP)
    stroke(0)
    fill(0)
    textSize(48)
    text("If it goes up here you have to give me gum", width/2, height/5)
}

function draw() {
twitchX += random(-2, 2)
twitchY += random(-2, 2)
		fill(255, 255, 0)
		//circle(twitchX, twitchY, 20);
	let changeX = map(noise(offsetX), 0, 1, -2, 2)
	let changeY = map(noise(offsetY), 0, 1, -2, 2)
flyX += changeX
flyY += changeY
		fill(0, 255, 255)
		circle(flyX, flyY, 15)
offsetX += 0.01
offsetY += 0.01
}