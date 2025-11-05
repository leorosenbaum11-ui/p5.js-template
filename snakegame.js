let appleAmount
let posX = 320
let posY = 240
let snakeTail
let randomNum
let descrip
let checkvar
let appleCount
let direction
let appleLayer
let snakeHead
let hardMode
let snakeDead
let detailLayer

let music;

//arrays
const tailPosY = [];
const tailPosX = [];

function spawnApple() {
	appleX = (random(20, width - 20));
	appleY = (random(20, height - 20));
}

function setup() {
	appleEaten = true
	direction = 1
	appleCount = 1
	createCanvas(640, 480);
	background(100);
	frameRate(200)
	colorMode(HSB)
	
	//create buffer layers
	snakeTail = createGraphics(640, 480);
	descrip = createGraphics(640, 480);
	snakehead = createGraphics(400, 400);
	detailLayer = createGraphics(640, 480);
	
//draw snake head
//color of snake
snakehead.push()
snakehead.translate(200, 200)
//color
snakehead.colorMode(HSB)
snakehead.fill(33, 100, 100)
snakehead.noStroke()
//snout
snakehead.circle(0, 0, 100)
snakehead.beginShape()
snakehead.vertex(0, -51)
snakehead.vertex(70, -40)
snakehead.vertex(70, 40)
snakehead.vertex(0, 51)
snakehead.endShape(CLOSE)
snakehead.arc(70, 0, 80, 80, 3*PI/2, PI/2)

snakehead.strokeWeight(5)
snakehead.stroke(0)
snakehead.fill(25, 100, 100)
snakehead.beginShape();
snakehead.vertex(0, -50);
snakehead.vertex(-70, -70);
snakehead.vertex(-40, -30);
snakehead.vertex(-10, -25);
snakehead.endShape(CLOSE);

snakehead.strokeWeight(5)
snakehead.stroke(0)
snakehead.fill(25, 100, 100)
snakehead.beginShape();
snakehead.vertex(0, 50);
snakehead.vertex(-70, 70);
snakehead.vertex(-40, 30);
snakehead.vertex(-10, 25);
snakehead.endShape(CLOSE);

snakehead.strokeWeight(5)
snakehead.stroke(0)
snakehead.fill(0, 0, 100)
snakehead.beginShape();
snakehead.curveVertex(10, -30);
snakehead.curveVertex(10, -30);
snakehead.curveVertex(8, -20);
snakehead.curveVertex(15, -10);
snakehead.curveVertex(25, -10);
snakehead.curveVertex(25, -10);
snakehead.endShape(CLOSE)

snakehead.beginShape()
snakehead.curveVertex(10, 30);
snakehead.curveVertex(10, 30);
snakehead.curveVertex(8, 20);
snakehead.curveVertex(15, 10);
snakehead.curveVertex(25, 10);
snakehead.curveVertex(25, 10);
snakehead.endShape(CLOSE)

snakehead.fill(25, 100, 100)
snakehead.beginShape()
snakehead.curveVertex(20, -40);
snakehead.curveVertex(20, -40);
snakehead.curveVertex(50, -20);
snakehead.curveVertex(80, -30);
snakehead.curveVertex(80, -30);
snakehead.endShape(CLOSE)

snakehead.beginShape()
snakehead.curveVertex(20, 40);
snakehead.curveVertex(20, 40);
snakehead.curveVertex(50, 20);
snakehead.curveVertex(80, 30);
snakehead.curveVertex(80, 30);
snakehead.endShape(CLOSE)

snakehead.rectMode(CORNER);
snakehead.rect(0, -10, 50, 20);

snakehead.pop()
	
	//create start menu layer
	descrip.background(360, 100, 100)
	descrip.fill(0, 50, 50);
	descrip.rectMode(CENTER);
	descrip.rect(320, 240, 400, 300, 10);
	descrip.textAlign(CENTER, CENTER)
	descrip.fill(360, 100, 100)
	descrip.textSize(10)
	descrip.text("No Death, Double Points, Slower", 220, 200)
	descrip.text("Death and Faster", 420, 200)
	descrip.textSize(10)
	descrip.rect(220, 260, 70, 15, 5)
	descrip.fill(0)
	descrip.text("Easy Mode", 220, 260)
	descrip.fill(0, 50, 50);
	descrip.rect(420, 260, 70, 15, 5)
	descrip.fill(0)
	descrip.text("Hard Mode", 420, 260)
	
	//beginning states
	appleCount = 3
	appleAmount = 3
	snakeDead = false
	checkvar = false
	spawnApple()
	hardMode = false
	extremeMode = false
}

//direction 1 is none
//direction 2 is up
//direction 3 is right
//direction 4 is left
//direction 5 is down

function draw() {
	//direction logic
	if (direction === 1) {
		
	}


	if (direction === 2) {
		if (hardMode === true) {
			posY -= 7
		}
		if (hardMode === false) {
			posY -= 5
		}
	}
	
	if (direction === 3) {
		if (hardMode === true) {
			posX += 7
		}
		if (hardMode === false) {
			posX += 5
		}
	}
	
	if (direction === 4) {
		if (hardMode === true) {
			posX -= 7
		}
		if (hardMode === false) {
			posX -= 5
		}
	}
	
	if (direction === 5) {
		if (hardMode === true) {
			posY += 7
		}
		if (hardMode === false) {
			posY += 5
		}
	}
	
	if (posX > 640) {
		if (hardMode === false) {
			posX = 0
		}
		if (hardMode === true) {
			snakeDead = true
		}
	}
	
	if (posX < 0) {
		if (hardMode === false) {
			posX = 640
		}
		if (hardMode === true) {
			snakeDead = true
		}
	}
	
	if (posY > 480) {
		if (hardMode === false) {
			posY = 0
		}
		if (hardMode === true) {
			snakeDead = true
		}
	}
	
	if (posY < 0) {
		if (hardMode === false) {
			posY = 480
		}
		if (hardMode === true) {
			snakeDead = true
		}
	}
	
	//background clear
	randomNum = random(0, 361)
	if (checkvar === true) {
		background(0, 0, 100);
	}
	
	if (frameCount % 1 === 0) {
		tailPosX.push(posX)
		tailPosY.push(posY)
	}
	
	const recentPosX = tailPosX.slice(-1*appleCount)
	const recentPosY = tailPosY.slice(-1*appleCount)
	
	for (let i = 0; i < appleCount; i++) {
		let theX = recentPosX[i]
		let theY = recentPosY[i]
		if (theX !== undefined && theY !== undefined && checkvar === true) {
			fill(33, 100, 100)
			noStroke()
			circle(theX, theY, 30)

			strokeWeight(1)
			stroke(0)
			beginShape();
			vertex(theX, theY);
			vertex(theX, theY-25);
			vertex(theX-25, theY);
			endShape(CLOSE)

			beginShape();
			vertex(theX, theY);
			vertex(theX, theY+25);
			vertex(theX+25, theY);
			endShape(CLOSE)

			fill(15, 100, 100)
			circle(theX, theY, 25)
			
			noStroke();
		}
	}
	
	for (let i = 0; i < recentPosX.length - 3; i++) {
  	let tailX = recentPosX[i];
  	let tailY = recentPosY[i];

  if (tailX !== undefined && tailY !== undefined) {
    let d = dist(posX, posY, tailX, tailY);
    if (d < 10) {  
      snakeDead = true
    }
  }
}
	
	//D RIGHT
	if (keyIsDown(68) && direction !== 4) {
		direction = 3
		//console.log("d pressed");
	}
	
	//A LEFT
	if (keyIsDown(65) && direction !== 3) {
		direction = 4
		//console.log("a pressed");
	}
	
	//W UP
	if (keyIsDown(87) && direction !== 5) {
		direction = 2
		//console.log("w pressed");
	}
		
	//S DOWN
	if (keyIsDown(83) && direction !== 2) {
		direction = 5
		//console.log("s pressed");
	}
	
	fill(0, 0, 100)
	
	fill(0, 100, 100);  // red in HSB
	noStroke();
	circle(appleX, appleY, 20);
	
	let appleDist = dist(posX, posY, appleX, appleY);
	if (appleDist < 30) {
		if (hardMode === false) {
			appleCount += 5;
		}
		if (hardMode === true) {
			appleCount+= 5;
		}
		spawnApple()
	}
	
	//snake head/rotation
	push();
	rectMode(CENTER)
	imageMode(CENTER);
	if (direction === 2) {
		push()
		translate(posX, posY)
		rotate(3*PI/2)
		scale(0.35)
		image(snakehead, 0, 0)
		pop()
	}
	
	if (direction === 3) {
		push()
		translate(posX, posY)
		scale(0.35)
		image(snakehead, 0, 0)
		pop()
	}
	
	if (direction === 4) {
		push()
		translate(posX, posY)
		rotate(PI)
		scale(0.35)
		image(snakehead, 0, 0)
		pop()
	}
	
	if (direction === 5) {
		push()
		translate(posX, posY)
		rotate(PI/2)
		scale(0.35)
		image(snakehead, 0, 0)
		pop()
	}
	pop()
	
	if (descrip) {
		image(descrip, 0, 0)
	}
	
	button1Dist = dist(mouseX, mouseY, 220, 260)
	button2Dist = dist(mouseX, mouseY, 420, 260)
	
	if (checkvar === true) {
		push()
		fill(0)
		textFont('Courier New')
		textSize(20)
		//text(appleCount, 320, 40)
		pop()
	}
	
	if (snakeDead === true && hardMode === true) {
		remove()
	}
}

function keyPressed() {
	if (key === 'f') {
		appleCount += 1
	}
	if (key === 'i') {
		extremeMode = true
	}
}

function mouseClicked() {
	if (button1Dist < 70) {
		if (descrip) {
		descrip.remove();
		descrip = undefined
		checkvar = true
		hardMode = false
		}
	}
	
	if (button2Dist < 70) {
		if (descrip) {
		descrip.remove();
		descrip = undefined
		checkvar = true
		hardMode = true
		}
	}
}