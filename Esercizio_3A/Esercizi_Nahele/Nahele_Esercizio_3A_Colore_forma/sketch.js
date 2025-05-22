function setup() {
	createCanvas(800, 600)
}

function draw() {
	background(200, 100, 200)

	stroke(0, 0, 255)
	strokeWeight(10)
	point(30, 50)


	stroke(200, 255, 0)
	strokeWeight(2)
	line(100, 100, 250, 250)

	stroke(255, 255, 255)
	strokeWeight(5)
	fill (200, 0,0)
	rect(300, 300, 200, 200)

	fill (0,0,0)
	strokeWeight(20)
	ellipse(580, 140, 170, 140)

	noFill(0,0,0)
	stroke(0, 255, 255)
	strokeWeight(5)
	ellipse(500, 100, 170, 140)

	fill(0,0,255)
	stroke(0, 0, 0)
	beginShape()
	vertex(200,500)
	vertex(400,450)
	vertex(300,100)
	vertex(200,500)
	endShape()

}