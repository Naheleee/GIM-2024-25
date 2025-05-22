function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	background(0, 0, 0)

	for (let i = 0; i < 100; i++) {

		let gocciaX = random(0, width)
		let gocciaY = random(-150, height)
		let gocciaL = random(10, 200)

		stroke(255, random(100, 255))
		strokeWeight(random(1, 3))

		line(gocciaX, gocciaY, gocciaX, gocciaY + gocciaL)

	}
}