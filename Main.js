//Leo Rosenbaum
//FLOOR IN PHYS CLASS FOR JUMPING ON OBJ
const gravity = 9.81 / 60
const groundY = 500 - 50
const extraNudge = 0.01

let objNumber
let objName

let physObj = []

let player

function setup() {
	createCanvas(1080, 500)
	background(100)
	//                width      height       rad  isCon stat, bouncy, AABB
	//phys objects
	player = new Phys(width / 2, height - 100, 20, 20, true, false, true, true)
	physObj.push(player)

	newObj = new Phys(width/2, height/2, 20, 20, false, true, true, true)
	physObj.push(newObj)
}

function draw() {
	background(100)

	//floor
	push()
	stroke(0)
	fill(0)
	rect(0, groundY, width, 50)
	pop()

	for (let otherObj of physObj){
		otherObj.update()
		otherObj.display()
	}

	//objects
	//player.update()
	//player.display()

	//newObj.update()
	//newObj.display()
}

function mouseClicked() {
	for (let otherObj of physObj){
		otherObj.stat = false
	}
}