// ==== CONFIGURAZIONE ====
// Colori
let bgColor = [30, 30, 30];            // Sfondo
let faceColor = [200];                 // Colore quadrante
let tickColor = [40];                  // Colore tacche
let hourHandColor = [0];
let minuteHandColor = [40];
let secondHandColor = [200, 0, 0];
let centerDotColor = ["red"];
let digitalBg = [60];
let digitalText = [220];

// Dimensioni
let clockRadius = 180;
let handWidthHour = 5;
let handLengthHour = clockRadius * 0.5;
let handWidthMinute = 5;
let handLengthMinute = clockRadius * 0.75;
let handWidthSecond = 3;
let handLengthSecond = clockRadius * 0.85;
let tickLength = 20;

// Distanza dei numeri (12, 3, 6, 9) dal bordo
let numOffset = -40;
// =========================

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont('monospace');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(...bgColor);
  translate(width / 2, height / 2);

  // Tempo corrente
  let now = new Date();
  let ms = now.getMilliseconds();
  let s = now.getSeconds() + ms / 1000;
  let m = now.getMinutes();
  let h = now.getHours() % 12;

  // Angolo della lancetta dei secondi
  let angleS = map(s, 0, 60, 0, 360);

  // Ruota tutto tranne la lancetta dei secondi
  push();
    rotate(-angleS);  // Rotazione inversa per bloccare la lancetta dei secondi

    // Quadrante
    fill(...faceColor);
    noStroke();
    ellipse(0, 0, clockRadius * 2);

    // Tacche minuti/ore
    stroke(...tickColor);
    for (let i = 0; i < 60; i++) {
      let angle = map(i, 0, 60, 0, 360);
      let x1 = cos(angle) * (clockRadius - 5);
      let y1 = sin(angle) * (clockRadius - 5);
      let x2 = cos(angle) * (clockRadius - tickLength - (i % 5 === 0 ? 5 : 0));
      let y2 = sin(angle) * (clockRadius - tickLength - (i % 5 === 0 ? 5 : 0));
      strokeWeight(i % 5 === 0 ? 4 : 1);
      line(x1, y1, x2, y2);
    }

    // Numeri
    fill(200);
    noStroke();
    textSize(30);
    text("12", 0, -clockRadius + numOffset);
    text("3", clockRadius - numOffset, 0);
    text("6", 0, clockRadius - numOffset);
    text("9", -clockRadius + numOffset, 0);

    // Orologio digitale
    let digitalString = nf(now.getHours(), 2) + ' ' + nf(m, 2) + ' ' + nf(floor(s), 2);
    fill(...digitalBg);
    rect(0, clockRadius - 80, 80, 24, 3);
    fill(...digitalText);
    textSize(18);
    text(digitalString, 0, clockRadius - 79);

    // Lancetta ore
    push();
      rotate(map(h + m / 60, 0, 12, 0, 360) - 90);
      fill(...hourHandColor);
      noStroke();
      rect(handLengthHour / 2, 0, handLengthHour, handWidthHour, 5);
    pop();

    // Lancetta minuti
    push();
      rotate(map(m + s / 60, 0, 60, 0, 360) - 90);
      fill(...minuteHandColor);
      noStroke();
      rect(handLengthMinute / 2, 0, handLengthMinute, handWidthMinute, 5);
    pop();

    // Punto centrale
    noStroke();
    fill(...centerDotColor);
    circle(0, 0, 10);
  pop();

  // Lancetta secondi (ferma rispetto alla rotazione)
  push();
    rotate(-90); // In alto
    stroke(...secondHandColor);
    strokeWeight(handWidthSecond);
    line(0, 0, handLengthSecond, 0);
  pop();
}
