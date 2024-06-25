function mostrarTest() {
    var testContainer = document.getElementById("testContainer");
    var resultadoContainer = document.getElementById("resultadoContainer");
    testContainer.style.display = "block";
    resultadoContainer.style.display = "none";
}

function mostrarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoDiv.style.display = "block";
    resultadoContainer.style.display = "block";

    var totalPuntos = 0;
    var maxPuntos = 15;  // 5 preguntas con un máximo de 3 puntos cada una
    var formulario = document.getElementById("bipolarTestForm");

    for (var i = 1; i <= 5; i++) {
        var pregunta = formulario["pregunta" + i];
        for (var j = 0; j < pregunta.length; j++) {
            if (pregunta[j].checked) {
                totalPuntos += parseInt(pregunta[j].value);
            }
        }
    }

    var probabilidadBipolaridad = (totalPuntos / maxPuntos) * 100;
    resultadoDiv.textContent = "Tu probabilidad de tener bipolaridad es de: " + probabilidadBipolaridad.toFixed(2) + "%";
    
}

function calcularResultado() {
    var totalPuntos = 0;
    var maxPuntos = 15;  // 5 preguntas con un máximo de 3 puntos cada una
    var formulario = document.getElementById("bipolarTestForm");

    for (var i = 1; i <= 5; i++) {
        var pregunta = formulario["pregunta" + i];
        for (var j = 0; j < pregunta.length; j++) {
            if (pregunta[j].checked) {
                totalPuntos += parseInt(pregunta[j].value);
            }
        }
    }

    var probabilidadBipolaridad = (totalPuntos / maxPuntos) * 100;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Tu probabilidad de tener bipolaridad es de: " + probabilidadBipolaridad.toFixed(2) + "%";


    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.style.display = "block";

    return false;  // Evita que se envíe el formulario de forma tradicional
}


// Arreglo con nombres de imágenes de cartas
var cartas = [
    "Alegria", "Tristeza", "Mania", "Depresion", "Irritabilidad", "Paz", "Euforia", "Dolor"
];

// Duplicar el arreglo para tener parejas de cartas
cartas = cartas.concat(cartas);

// Función para barajar el arreglo de cartas
function barajarCartas() {
    for (var i = cartas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cartas[i];
        cartas[i] = cartas[j];
        cartas[j] = temp;
    }
}

// Función para iniciar el juego
function iniciarJuego() {
    barajarCartas();
    var juegoCartas = document.getElementById("juegoCartas");
    juegoCartas.innerHTML = "";

    // Crear las cartas y añadir eventos de clic
    for (var i = 0; i < cartas.length; i++) {
        var carta = document.createElement("div");
        carta.className = "carta";
        carta.textContent = "?"; // Contenido oculto inicial
        carta.setAttribute("data-valor", cartas[i]);
        carta.addEventListener("click", voltearCarta);
        juegoCartas.appendChild(carta);
    }

    // Mostrar el juego de memoria
    document.getElementById("juegoMemoria").style.display = "block";
}

// Variables para controlar el juego de memoria
var primeraCarta = null;
var segundaCarta = null;

// Función para voltear la carta seleccionada
function voltearCarta() {
    if (this === primeraCarta || this === segundaCarta) {
        return; // Evitar voltear la misma carta dos veces
    }

    this.textContent = this.getAttribute("data-valor");

    if (!primeraCarta) {
        primeraCarta = this;
        return;
    }

    segundaCarta = this;

    // Comprobar si las cartas son iguales
    if (primeraCarta.getAttribute("data-valor") === segundaCarta.getAttribute("data-valor")) {
        setTimeout(function() {
            primeraCarta.style.backgroundColor = segundaCarta.style.backgroundColor = "#66BB6A"; // Color de acierto
            primeraCarta = segundaCarta = null;
            comprobarFinJuego();
        }, 500);
    } else {
        setTimeout(function() {
            primeraCarta.textContent = segundaCarta.textContent = "?"; // Voltear de nuevo
            primeraCarta = segundaCarta = null;
        }, 1000);
    }
}

// Función para comprobar si se han encontrado todas las parejas
function comprobarFinJuego() {
    var todasVolteadas = true;
    var cartas = document.querySelectorAll(".carta");
    cartas.forEach(function(carta) {
        if (carta.textContent === "?") {
            todasVolteadas = false;
        }
    });

    if (todasVolteadas) {
        alert("¡Has encontrado todas las parejas! ¡Felicidades!");
    }
}
