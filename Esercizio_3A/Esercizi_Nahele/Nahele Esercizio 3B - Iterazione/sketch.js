function setup() {
	createCanvas(800, 500)
	background(255, 180, 250)

}

function draw() {
	//background(100, 100, 200)
	if (mouseIsPressed) {

		stroke(0)

		strokeWeight(1)

		fill(random(255))

		ellipse(mouseX, mouseY, 40)

		ellipse(width - mouseX, mouseY, 40)
	}
}

function keyPressed() {

	if (key == "s") {
		save("immagine.png")
	}

	else if(key == "x"){
		background(255, 180, 250)
	}
}