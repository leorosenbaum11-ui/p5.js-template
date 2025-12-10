class Phys {
	constructor(startX, startY, objectRadius, isCon, stat, bouncy) {
		this.pos = createVector(startX, startY)
		this.vel = createVector(0, 0)
		this.acc = createVector(0, 0)
		this.isGrounded = false
		this.radius = objectRadius
		this.isCon = isCon
		this.startX = startX
		this.startY = startY
		this.stat = stat
		this.onObject = false
		this.bouncy = bouncy
	}
	
	update() {
		
		this.acc.set(0, 0)

		//vertical movement
		if ((keyIsDown(87) && this.isGrounded && this.isCon) || (keyIsDown(87) && this.onObject && this.isCon)) {
			this.acc.y = -6
		}

		//gravity
		if (!this.isGrounded && !this.stat && !this.onObject) {
			this.acc.y = gravity 
		}

		//horizontal movement
		if (keyIsDown(68) && this.isCon) {
			this.acc.x = 1 //d right
		} else if (keyIsDown(65) && this.isCon) {
			this.acc.x = -1 //a left
		} else {
			//friction
			if (abs(this.vel.x) < 0.5) {
				this.acc.x = 0
				this.vel.x = 0
			} else if (this.vel.x < 0) {
				this.acc.x = 1
			} else if (this.vel.x > 0) {
				this.acc.x = -1
			}
		}

		//update physics
		this.pos.add(this.vel) //add vel to pos
		this.vel.add(this.acc) //add acc to vel
		this.vel.limit(10)
		this.acc.set(0, 0) //reset acc

		//boundary
		if (this.pos.y - extraNudge >= groundY - this.radius) {
			this.pos.y = groundY - this.radius
			this.vel.y = 0
			this.acc.y = 0
			this.isGrounded = true
		} else {
			this.isGrounded = false
		}

		if (this.pos.x > width) {
			this.pos.x = width
			this.vel.x = 0
		} else if (this.pos.x < 0) {
			this.pos.x = 0
			this.vel.x = 0
		}
		this.collisions(physObj) //call method to check collisions
		console.log(this.onObject)
	}

	collisions(allObjects) {
		if (!this.stat){
			let isOnObjectThisCheck = false;
		for (let other of allObjects) {
			let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y)
			if (other == this) {
				continue
			} else if (distance <= this.radius + other.radius) {
				this.onObject = true
				isOnObjectThisCheck = true;
				this.acc.set(0, 0)

				if(this.bouncy && other.bouncy) {
					this.vel.mult(-0.7, -0.7)
				}

				let overlap = (this.radius + other.radius) - distance
				let separation = overlap + extraNudge

				let direction = p5.Vector.sub(this.pos, other.pos)

				if (distance === 0) {
					direction.set(1, 0)
				} else {
					direction.normalize()
				}
				this.pos.add(direction.mult(separation))
			}
		}
			if (isOnObjectThisCheck === false) {
				this.onObject = false
			}
		}
	}

	reset() {
		this.pos.x = this.startX
		this.pos.y = this.startY
	}

	display() {
		push()
		fill(255)
		noStroke()
		circle(this.pos.x, this.pos.y, this.radius * 2)
		pop()
	}
}