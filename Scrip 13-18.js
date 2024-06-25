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
    resultadoDiv.innerHTML = obtenerMensajeResultado(probabilidadBipolaridad);
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
    resultadoDiv.innerHTML = obtenerMensajeResultado(probabilidadBipolaridad);

    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.style.display = "block";

    return false;  // Evita que se envíe el formulario de forma tradicional
}

function obtenerMensajeResultado(probabilidad) {
    var mensaje;
    var emoji;
    var color;

    if (probabilidad <= 25) {
        mensaje = "¡Bien hecho! Tu probabilidad de tener bipolaridad es baja.";
        emoji = "😊";
        color = "green";
    } else if (probabilidad <= 50) {
        mensaje = "Tu probabilidad de tener bipolaridad es moderada. Podría ser útil hablar con un adulto o un profesional.";
        emoji = "🤔";
        color = "orange";
    } else if (probabilidad <= 75) {
        mensaje = "Tu probabilidad de tener bipolaridad es alta. Considera buscar apoyo de un profesional.";
        emoji = "😐";
        color = "red";
    } else {
        mensaje = "Tu probabilidad de tener bipolaridad es muy alta. Es importante que hables con un profesional de salud mental.";
        emoji = "😟";
        color = "darkred";
    }

    return `<p style="color: ${color}; font-size: 24px;">${emoji} ${mensaje}</p>
            <p>Este es tu porcentaje de padecer bipolaridad: ${probabilidad.toFixed(2)}%</p>`;
}// Definir los estados de ánimo y sus imágenes correspondientes
const moodStates = {
    neutral: "imagenes/neutral.jpg",
    feliz: "imagenes/feliz.jpg",
    triste: "imagenes/triste.jpg"
};

let moodLevel = "neutral"; // Estado de ánimo inicial

// Función para iniciar el juego
function iniciarJuego() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.style.display = 'block';
    window.addEventListener('keydown', actualizarEstadoVisual);
}

// Función para actualizar visualmente el estado de ánimo
function actualizarEstadoVisual(event) {
    const moodImage = document.getElementById('moodImage');

    if (event.key === 'f') {
        moodLevel = 'feliz';
    } else if (event.key === 'j') {
        moodLevel = 'triste';
    } else {
        return; // Salir de la función si no es 'f' ni 'j'
    }

    moodImage.src = moodStates[moodLevel]; // Actualizar la imagen
    moodImage.alt = `Estado ${moodLevel.charAt(0).toUpperCase() + moodLevel.slice(1)}`;
}
