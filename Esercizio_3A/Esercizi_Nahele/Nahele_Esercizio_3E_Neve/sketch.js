let px = 150
let py = 200
let dim = 30


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)

	px = random(0, width)
	py = random(-100)
	dim = random(10, 20)
	
}



function draw() {

	px = px + random(-1.5, 1.5)
	py = py + random(1, 2)

	if (py > height) {
		py = 0
	}


	background(0)


	fill(255)
	textAlign(CENTER, CENTER)

	textSize(dim)
	text("❋", px, py)


}