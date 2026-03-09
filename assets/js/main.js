const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOOP.style.background = "rgb(177, 156, 255)";
canvasRandom.style.background = "#a1fff9";
canvasMultiple.style.background = "#e1fc97";

class Circle {

  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  draw(context) {

    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

    // fondo
    context.fillStyle = this.backcolor;
    context.fill();

    // línea
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    // texto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// función para colores aleatorios
function colorRandom() {
  return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}

// ---------------- CÍRCULO CENTRO ----------------

let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  50,
  colorRandom(),
  "Tec",
  colorRandom(),
  colorRandom()
);

miCirculo.draw(ctx);

// ---------------- CÍRCULO RANDOM ----------------

let randomRadius = Math.floor(Math.random() * 70 + 20);

let randomX = Math.random() * (canvasRandom.width - randomRadius * 2) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - randomRadius * 2) + randomRadius;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  colorRandom(),
  "Tec",
  colorRandom(),
  colorRandom()
);

miCirculoRandom.draw(ctxRandom);

// ---------------- MÚLTIPLES CÍRCULOS ----------------

let MaxCircle = 10;
let arrayCircle = [];

for (let i = 0; i < MaxCircle; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  // posiciones controladas para que no se salga del canvas
  let randomX = Math.random() * (canvasMultiple.width - randomRadius * 2) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - randomRadius * 2) + randomRadius;

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    colorRandom(), // línea
    i + 1,
    colorRandom(), // fondo
    colorRandom()  // texto
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}