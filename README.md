# 🎨 Aplicación Canvas 2D con Programación Orientada a Objetos (OOP)

## 📌 Descripción del proyecto

Esta aplicación web demuestra el uso de la **API Canvas 2D de HTML5** junto con **JavaScript y Programación Orientada a Objetos (OOP)** para crear y renderizar figuras gráficas dinámicamente dentro del navegador.

El proyecto dibuja **círculos en diferentes escenarios** utilizando una clase llamada `Circle`. Cada círculo puede tener diferentes propiedades como posición, radio, color de borde, color de fondo y texto.

La aplicación muestra tres ejemplos principales:

1. **Objeto 2D**
   Un círculo dibujado en el centro del canvas utilizando un objeto de la clase `Circle`.

2. **Objeto con Random**
   Un círculo generado con **posición y tamaño aleatorios**, asegurando que siempre permanezca dentro del canvas.

3. **Múltiples objetos**
   Se generan varios círculos utilizando un **arreglo de objetos**, cada uno con colores y posiciones aleatorias.

---

# 🚀 Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **Bootstrap 5**
* **JavaScript**
* **Canvas API**
* **Programación Orientada a Objetos (OOP)**

---

# 🧠 Conceptos aplicados

Este proyecto aplica varios conceptos importantes del desarrollo web:

* Uso de **Canvas API**
* **Programación Orientada a Objetos en JavaScript**
* Creación de **clases y objetos**
* Uso de **métodos**
* Generación de **valores aleatorios**
* Manipulación del **DOM**
* Diseño **responsive con Bootstrap**
* Organización de código en **archivos separados**

---

# 🧩 Estructura del proyecto

```
canvas-oop-project
│
├── index.html
│
├── assets
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   └── main.js
│   │
│   └── img
│       └── fav.png
│
└── README.md
```

---

# ⚙️ Funcionamiento

## Clase Circle

La aplicación utiliza una clase llamada `Circle` para representar cada círculo dentro del canvas.

Propiedades principales:

* `posX` → posición horizontal
* `posY` → posición vertical
* `radius` → radio del círculo
* `color` → color del borde
* `backcolor` → color de fondo
* `text` → texto dentro del círculo
* `textcolor` → color del texto

Método principal:

```
draw(context)
```

Este método se encarga de:

* Dibujar el círculo
* Aplicar color de fondo
* Dibujar el borde
* Renderizar el texto en el centro

---

# 🎲 Generación de colores aleatorios

Para crear círculos visualmente distintos, se utiliza una función que genera colores RGB aleatorios:

```
function colorRandom() {
  return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}
```

Esto permite que cada círculo tenga:

* Color de borde diferente
* Color de fondo diferente
* Color de texto diferente

---

# 🖼️ Secciones de la aplicación

## 1️⃣ Objeto 2D

Dibuja un círculo centrado dentro del canvas utilizando coordenadas calculadas a partir del tamaño del lienzo.

## 2️⃣ Objeto con Random

Genera un círculo con:

* posición aleatoria
* radio aleatorio
* colores aleatorios

Las coordenadas se calculan para evitar que el círculo se salga del canvas.

## 3️⃣ Múltiples objetos

Se utiliza un **arreglo (`arrayCircle`)** para almacenar múltiples instancias de la clase `Circle`.

Posteriormente se recorren para dibujarlos dentro del canvas.

---

# 🎨 Interfaz de usuario

La interfaz fue diseñada utilizando **Bootstrap 5** y estilos personalizados en CSS para lograr una apariencia:

* moderna
* responsiva
* visualmente agradable

Incluye:

* **Navbar**
* **Hero section**
* **Cards para cada canvas**
* **Footer con información del desarrollador**

---

# 📱 Diseño Responsive

La aplicación se adapta a diferentes tamaños de pantalla:

* 💻 Computadora
* 📱 Celulares
* 📱 Tablets

Bootstrap se utiliza para manejar el sistema de **grid responsivo**.

---

# ▶️ Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio

```
git clone <repositorio>
```

2. Abrir la carpeta del proyecto

3. Ejecutar el archivo

```
index.html
```

en cualquier navegador moderno.

No se requiere instalación de dependencias.

---

# ✨ Características principales

✔ Uso de **Canvas API**
✔ Implementación de **Programación Orientada a Objetos**
✔ Generación de **figuras dinámicas**
✔ **Colores aleatorios**
✔ **Múltiples objetos en un canvas**
✔ Diseño **moderno y responsivo**
✔ Interfaz basada en **Bootstrap**

---

# 👨‍💻 Autor

**Ing.Eduardo Nava**

Proyecto académico desarrollado para practicar:

* Canvas API
* JavaScript
* Programación Orientada a Objetos
* Desarrollo de interfaces web modernas

---

# 📄 Licencia

Este proyecto fue desarrollado con fines **educativos y de aprendizaje**.
