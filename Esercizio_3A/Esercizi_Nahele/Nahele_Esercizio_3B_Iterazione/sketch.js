let canvas;

function setup() {
	canvas = createCanvas(800, 500);
	centerCanvas(); // Centra il canvas nella finestra
	background(255, 180, 250);
}

function draw() {
	// background(100, 100, 200)
	if (mouseIsPressed) {
		stroke(0);
		strokeWeight(1);
		fill(random(255));
		ellipse(mouseX, mouseY, 40);
		ellipse(width - mouseX, mouseY, 40);
	}
}

function keyPressed() {
	if (key == "s") {
		save("immagine.png");
	} else if (key == "x") {
		background(255, 180, 250);
	}
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
