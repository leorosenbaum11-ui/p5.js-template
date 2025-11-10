let theta
let spinAngle
let posX
let posY
let hue
let offset

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	spinAngle = (PI/4)
    posX = width/2
    posY = height/2
    theta = 0
    hue = 165
    offset = random(0, 1000)
}

function draw() {
    push()
    hue = map(noise(offset), 0, 1, 130, 230)
    colorMode(HSB)
	push()
	noFill()
	stroke(hue, 100, 100)
	translate(posX, posY)
	rotate(spinAngle)
	rectMode(CENTER)
    let sz = map(sin(theta), -1, 1, 20, 250)
	square(0, 0, sz)

    spinAngle += 0.5
    theta += 0.1
    offset += 0.5
    pop()

    stroke(255)
    textSize(20)
}

function mouseClicked() {
    //noLoop()
}