let fiocchi

function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocchi = []

	for (let i = 0; i < 3; i++) {
		fiocchi[i] = {
			px: random(0, width),
			py: random(-100),
			dim: random(20, 30),
		}
	}


}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
	fiocchi[i].py = fiocchi[i].py + random(0.8, 1.2)

	if (fiocchi[i].py > height) {
		fiocchi[i].py = 0
	}

	background(0)

	fill(255)
	textAlign(CENTER, CENTER)

	textSize(fiocchi[0].dim)
	text("❋", fiocchi[0].px, fiocchi[0].py)

}