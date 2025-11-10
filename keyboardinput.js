let message

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#00FFBB');
	message="";
}

function draw() {
	background('#00FFBB');
	fill(127, 127, 0);
	textSize(64);
	textAlign(CENTER, CENTER);
	text(message, width/2, height/2)
}

function keyPressed(){
    if (keyCode != 8) {
        message+=key
    }
    if (keyCode == 8) {
        message = message.substring(0, message.length-1)
    }
}

function mouseClicked(){
	message = ""
}