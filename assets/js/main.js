const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "rgb(177, 156, 255)";
canvasRandom.style.background = "#a1fff9";
canvasMultiple.style.background = "#e1fc97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// RADIO CONTROLADO (muy importante)
let randomRadius = Math.floor(Math.random() * 70 + 20);  
// Radio entre 20 y 90 aprox (cabe siempre en 300x200)

// COORDENADAS CONTROLADAS
let randomX = Math.random() * (canvasRandom.width  - randomRadius * 2) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - randomRadius * 2) + randomRadius;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  "rgb(253, 224, 144)",
  "Tec",
  "rgb(153, 255, 122)",
  "rgb(135, 96, 243)"
);

miCirculoRandom.draw(ctxRandom);

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "rgb(135, 96, 243)", "Tec", "rgb(129, 209, 255)", "rgb(135, 96, 243)");
miCirculo.draw(ctx);

let MaxCircles = 10;
let arrayCircle = [];

for (let i = 0; i < 5; i++) {
  let randomX = Math.random() * canvasMultiple.width;
  let randomY = Math.random() * canvasMultiple.height;
  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "#9e500d", i + 1, "#f29a4e");

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
} 
