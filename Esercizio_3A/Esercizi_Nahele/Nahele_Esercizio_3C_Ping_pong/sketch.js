let = posizioneX
let = velocitaX

let = posizioneY, velocitaY


function setup() {
	createCanvas(800, 500)
	// background(65, 105, 255)

	posizioneX = 0
	velocitaX = 10

	posizioneY = 200
	velocitaY = 3
}

function draw() {
	background(65, 105, 255)

	posizioneX = posizioneX + velocitaX
	posizioneY = posizioneY + velocitaY

	// if (posizioneX >= width) {
	// 	velocitaX = -velocitaX
	// } else if (posizioneX < 0) {
	// 	velocitaX = - velocitaX
	// }

	if (posizioneX >= width || posizioneX < 0) {
		velocitaX = -velocitaX;
	}

	if (posizioneY >= height || posizioneY < 0) {
		velocitaY = -velocitaY
	}

	strokeWeight(5)
	stroke("white")
	line(0, height / 2, width, height / 2)

	stroke("grey")
	line(width / 2, 0, width / 2, height)

	fill("orange")
	strokeWeight(0)
	ellipse(posizioneX, posizioneY, 30)


}