function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);
  scale(1.3)
  let now = new Date();
  let h = now.getHours() % 12;
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();

  // ==== CODA pendolare con effetto pendolo ====
  push();
  let t = millis() / 10;
  let swing = sin(t * PI) * 30; // PI => 1 ciclo al secondo (regolabile)
  translate(0, 80); // punto di attacco della coda
  rotate(swing);
  fill(0);
  rectMode(CORNER);
  rect(-10, 0, 25, 130, 100); // coda dal punto in alto
  rectMode(CENTER);
  pop();

  // ==== CORPO ====
  fill(0);
  rectMode(CENTER);
  rect(0, 0, 150, 200, 60, 60, 10, 10); // corpo centrale

  // ==== TESTA ====
  fill(0);
  ellipse(0, -150, 130, 120);

  // ==== ORECCHIE ====
  fill(0);
  triangle(-50, -190, -40, -220, 50, -160);
  triangle(50, -190, 40, -220, -50, -160);

  // ==== OCCHI ====
  let msFast = (ms * 2) % 1000; // raddoppia la velocità e mantieni nel range 0-999
  let eyeMove = sin((millis() / -20) * TWO_PI) * 11;
  fill(255);
  ellipse(-25, -160, 35, 45);
  ellipse(25, -160, 35, 45);

  // Pupille a lente appuntita
  fill(0);
  drawPupil(-25 + eyeMove, -160);
  drawPupil(25 + eyeMove, -160);

  // ==== PAPILLON ====
  fill(255);
  stroke(0)
  rect(-25, -95, 40, 22, 5, 100, 100, 5);
  rect(25, -95, 40, 22, 100, 5, 5, 100);
  ellipse(0, -95, 15, 15);

  

  // ==== ZAMPE SINISTRE ====


  push();
  translate(-40, -55); // punto di partenza sinistro
  rotate(35); // ruota tutto il gruppo di 35 gradi
  fill(255);
  stroke(0);
  for (let i = 0; i < 4; i++) {
    ellipse(0, i * 10, 15, 8); // allineate lungo l'asse Y (dritte)
  }
  pop();


   push();
  translate(-35, 85); // punto di partenza sinistro
  rotate(90); // ruota tutto il gruppo di 35 gradi
  fill(255);
  stroke(0);
  for (let i = 0; i < 4; i++) {
    ellipse(0, i * 10, 15, 8); // allineate lungo l'asse Y (dritte)
  }
  pop();

  // ==== ZAMPE DESTRE (specchiate) ====
  push();
  translate(40, -55); // punto di partenza destro (specchiato su X)
  rotate(-35); // ruota il gruppo in modo speculare (inversa)
  fill(255);
  stroke(0);
  for (let i = 0; i < 4; i++) {
    ellipse(0, i * 10, 15, 8);
  }
  pop();

     push();
  translate(65, 85); // punto di partenza sinistro
  rotate(90); // ruota tutto il gruppo di 35 gradi
  fill(255);
  stroke(0);
  for (let i = 0; i < 4; i++) {
    ellipse(0, i * 10, 15, 8); // allineate lungo l'asse Y (dritte)
  }
  pop();




  // ==== QUADRANTE CENTRATO ====
  push();
  translate(0, 10); // Posizionato correttamente al centro del corpo
  fill(0);
  stroke(255);
  strokeWeight(2);
  ellipse(0, 0, 100, 140); // quadrante

  fill(255);
  noStroke();
  textSize(18);

  // Numeri da 1 a 12
  for (let i = 1; i <= 12; i++) {
    let angle = map(i, 0, 12, 0, 360) - 90;
    let x = cos(angle) * 38;
    let y = sin(angle) * 56;
    text(i, x, y);
  }

  // Tacche puntini
  fill(255);
  for (let i = 0; i < 60; i++) {
    let angle = map(i, 0, 12, 0, 360) - 90;
    let x = cos(angle) * 46;
    let y = sin(angle) * 66;
    ellipse(x, y, 3, 3);
  }

  // ==== LANCETTE ====
  let angleH = map(h + m / 60, 0, 12, 0, 360) - 90;
  let angleM = map(m, 0, 60, 0, 360) - 90;

  stroke(255);
  strokeWeight(4);
  line(0, 0, cos(angleH) * 25, sin(angleH) * 25); // ora

  strokeWeight(3);
  line(0, 0, cos(angleM) * 40, sin(angleM) * 40); // minuti

  pop(); // Fine quadrante



  // Mezza luna bianca (mento)
  fill("white");
  noStroke();
  arc(0, -134, 90, 60, 0, 180, CHORD);

  // Mezza luna nera (bocca)
  fill("black");
  arc(0, -125, 30, 15, 0, 180, CHORD);

   // ==== NASO ====
  fill(0);
  stroke(0)
  ellipse(0, -136, 20, 20);
}

// === Funzione pupilla a forma di lente appuntita ===
function drawPupil(x, y) {
  beginShape();
  vertex(x, y - 16);
  bezierVertex(x + 8, y - 10, x + 8, y + 10, x, y + 16);
  bezierVertex(x - 8, y + 10, x - 8, y - 10, x, y - 16);
  endShape(CLOSE);
}