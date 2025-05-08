function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	background(0)




	lights(10)

	rotateX(-mouseY * 0.01)
	rotateY(-mouseX * 0.01)

	box(100)

	let dimensione = 100




	for (let i = 0; i < 100; i++) {

		let gX = random(-dimensione, dimensione)
		let gY = random(-dimensione, dimensione - gL)
		let gL = random(10, 200)
		let gZ = random(-dimensione, dimensione)

		stroke(255, random(100, 255))
		strokeWeight(random(1, 3))

		line(gX, gY, gZ, gX, gY + gL, gZ)

	}

}