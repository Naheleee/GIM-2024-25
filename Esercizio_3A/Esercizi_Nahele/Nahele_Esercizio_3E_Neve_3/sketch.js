let fiocchi = [];
let numeroFiocchi = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < numeroFiocchi; i++) {
		fiocchi[i] = creaFiocco();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	fill(255);
	textAlign(CENTER, CENTER);

	for (let i = 0; i < fiocchi.length; i++) {
		let f = fiocchi[i];

		// Oscillazione orizzontale con sinusoide (valore modificabile in ampiezza e frequenza)
		f.angolo += f.velOscillazione;  // <-- VELOCITÀ OSCILLAZIONE ORIZZONTALE
		let oscillazione = sin(f.angolo) * f.ampiezza;  // <-- AMPIEZZA OSCILLAZIONE

		f.px = f.baseX + oscillazione;
		f.py += f.vel;  // <-- VELOCITÀ DI CADUTA (valore modificabile)

		if (f.py > height) {
			fiocchi[i] = creaFiocco();
			fiocchi[i].py = 0;
		}

		textSize(f.dim);
		text("❋", f.px, f.py);
	}
}

// Funzione per creare un nuovo fiocco con proprietà casuali
function creaFiocco() {
	return {
		baseX: random(0, width),     // posizione base x, usata per oscillare intorno
		px: 0,                       // x aggiornata con oscillazione
		py: random(-100, -10),
		dim: random(10, 50),

		vel: random(0.3, 1),         // <-- VELOCITÀ DI CADUTA verticale

		angolo: random(TWO_PI),     // angolo iniziale per sinusoide
		ampiezza: random(10, 30),   // <-- AMPIEZZA OSCILLAZIONE orizzontale
		velOscillazione: random(0.01, 0.03)  // <-- VELOCITÀ DI OSCILLAZIONE orizzontale
	};
}
