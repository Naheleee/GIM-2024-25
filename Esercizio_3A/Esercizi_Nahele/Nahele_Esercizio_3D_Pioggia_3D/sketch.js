let ultimoLampo = 0;
let lampeggi = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(60);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	let ora = frameCount;

	// Ogni 20 secondi (tot frame), attiva due lampeggi
	if (ora - ultimoLampo > 300) {
		lampeggi = [ora, ora + 5]; // Due lampi ravvicinati
		ultimoLampo = ora;
	}

	// Se siamo nel frame di un lampo, sfondo chiaro
	if (lampeggi.includes(ora)) {
		background(255);
	} else {
		background(0);
	}

	rotateX(-mouseY * 0.01);
	rotateY(-mouseX * 0.01);

	let dimensione = 1000;

	for (let i = 0; i < 50; i++) {
		let gl = random(10, 400);
		let gx = random(-dimensione, dimensione);
		let gy = random(-dimensione, dimensione - gl);
		let gz = random(-dimensione, dimensione);

		strokeWeight(random(1, 2));
		stroke(255, random(100, 255));
		line(gx, gy, gz, gx, gy + gl, gz);
	}
}
