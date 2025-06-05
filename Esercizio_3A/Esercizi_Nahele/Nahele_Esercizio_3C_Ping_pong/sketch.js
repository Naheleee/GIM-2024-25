let posizioneX
let velocitaX

let posizioneY, velocitaY

let canvas;

function setup() {
	canvas = createCanvas(800, 500);
	centerCanvas();

	posizioneX = 0
	velocitaX = 10

	posizioneY = 200
	velocitaY = 3
}

function draw() {
	background(65, 105, 255)

	posizioneX = posizioneX + velocitaX
	posizioneY = posizioneY + velocitaY

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

// Funzione per centrare il canvas nella finestra
function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	canvas.position(x, y);
}

// Ricentra il canvas se la finestra viene ridimensionata
function windowResized() {
	centerCanvas();
}
