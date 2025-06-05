// ==== CONFIGURAZIONE ====
let fontName = 'Azeret Mono';      // Font Google: Azeret Mono
let bgColor = [0, 0, 0];         // Sfondo rosso
let textColor = ["blue"];             // Testo bianco
let boxColor = [20, 20, 20];     // Rettangolo nero trasparente dietro l'orario
let timeTextSize = 100;             // Dimensione orario
let boxPadding = 60;               // Padding interno rettangolo
// =========================

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(fontName);
  textAlign(CENTER, CENTER);
  frameRate(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(...bgColor);

  let now = new Date();
  let h = nf(now.getHours(), 2);
  let m = nf(now.getMinutes(), 2);
  let s = nf(now.getSeconds(), 2);
  let timeString = `${h}:${m}:${s}`;

  textSize(timeTextSize);
  let tw = textWidth(timeString);
  let th = timeTextSize;

  // Rettangolo sfondo dietro l'orario
  fill(...boxColor);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2 - 4, tw + boxPadding - 30, th + boxPadding - 50, 30);

  // Testo orario
  fill(...textColor);
  text(timeString, width / 2, height / 2);
}
