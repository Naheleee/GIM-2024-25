let posizioneX, velocitaX;
let posizioneY, velocitaY;

let paddleY;
let paddleYRight; // Paddle destra (automatica)

const paddleWidth = 10;
const paddleHeight = 80;
const paddleSpeed = 5;

let canvas;

function setup() {
	canvas = createCanvas(800, 500);
	centerCanvas();

	resetBall();

	paddleY = height / 2 - paddleHeight / 2;
	paddleYRight = height / 2 - paddleHeight / 2;
}

function draw() {
	background(65, 105, 255);

	// Muovi la pallina
	posizioneX += velocitaX;
	posizioneY += velocitaY;

	// Collisione con bordi superiore e inferiore
	if (posizioneY >= height || posizioneY < 0) {
		velocitaY *= -1;
	}

	// Collisione con bordo destro
	if (posizioneX >= width) {
		velocitaX *= -1;
	}

	// Pallina esce dal lato sinistro => reset
	if (posizioneX < 0) {
		resetBall();
	}

	// Movimento paddle sinistra (W/S e frecce)
	if (keyIsDown(87) || keyIsDown(UP_ARROW)) { // W o freccia su
		paddleY -= paddleSpeed;
	}
	if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { // S o freccia giù
		paddleY += paddleSpeed;
	}
	paddleY = constrain(paddleY, 0, height - paddleHeight);

	// Paddle destra segue la pallina
	paddleYRight = posizioneY - paddleHeight / 2;
	paddleYRight = constrain(paddleYRight, 0, height - paddleHeight);

	// Collisione paddle sinistro
	if (posizioneX <= paddleWidth && posizioneY > paddleY && posizioneY < paddleY + paddleHeight) {
		velocitaX *= -1;
		posizioneX = paddleWidth;
	}

	// Disegno campo
	strokeWeight(5);
	stroke("white");
	line(0, height / 2, width, height / 2);
	stroke("grey");
	line(width / 2, 0, width / 2, height);

	// Paddle sinistra
	noStroke();
	fill("white");
	rect(0, paddleY, paddleWidth, paddleHeight);

	// Paddle destra
	rect(width - paddleWidth, paddleYRight, paddleWidth, paddleHeight);

	// Pallina
	fill("orange");
	ellipse(posizioneX, posizioneY, 30);
}

function resetBall() {
	posizioneX = width - 30;  // Inizia dal lato destro
	posizioneY = height / 2;
	velocitaX = -10;          // Va verso sinistra
	velocitaY = random(-5, 5);
}

// Funzione per centrare il canvas
function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	canvas.position(x, y);
}

// Ricentra il canvas se la finestra cambia dimensione
function windowResized() {
	centerCanvas();
}
