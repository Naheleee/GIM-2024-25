let fiocchi = [];
let numeroFiocchi = 150;

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

		// Oscillazione orizzontale
		f.angolo += f.velOscillazione;
		let oscillazione = sin(f.angolo) * f.ampiezza;
		f.px = f.baseX + oscillazione;
		f.py += f.vel;

		// Rotazione
		f.rot += f.velRot;

		// Repulsione dal mouse
		let dx = f.px - mouseX;
		let dy = f.py - mouseY;
		let distanza = sqrt(dx * dx + dy * dy);
		let raggioRepulsione = 200;

		if (distanza < raggioRepulsione) {
			let forza = (raggioRepulsione - distanza) / raggioRepulsione;
			f.px += (dx / distanza) * forza * 5;
			f.py += (dy / distanza) * forza * 5;
		}

		// Riposiziona in alto se scende
		if (f.py > height) {
			fiocchi[i] = creaFiocco();
			fiocchi[i].py = 0;
		}

		// Disegna con rotazione
		textSize(f.dim);
		push();
		translate(f.px, f.py);
		rotate(f.rot);
		text("❋", 0, 0);
		pop();
	}
}

// Funzione per creare un nuovo fiocco con proprietà casuali
function creaFiocco() {
	return {
		baseX: random(0, width),
		px: 0,
		py: random(-100, -10),
		dim: random(10, 50),
		vel: random(0.3, 1),
		angolo: random(TWO_PI),
		ampiezza: random(10, 30),
		velOscillazione: random(0.01, 0.03),
		rot: random(TWO_PI),
		velRot: random(-0.01, 0.01)
	};
}
