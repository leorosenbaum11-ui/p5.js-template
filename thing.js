let xPos
let yPos
let yVel
let yAcc

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(100)
    xPos = random(0, width)
    yPos = random(0, height/3)
    yVel = 0
    yAcc = 9.81/60
}

function draw(){
    background(100)
    circle(xPos, yPos, 20)

    yPos += yVel
    yVel += yAcc
    if (yPos >= height) {
        yPos = 0
        xPos = random(0, width)
    }
}