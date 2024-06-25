  // Variables globales para el movimiento del icono
  var offsetX, offsetY, isMouseDown = false;

  // Función para mostrar la ventana de alerta y controlar la música
  function mostrarAlertaMusica() {
      // Mostrar ventana de alerta
      var respuesta = confirm("¿Te gustaría escuchar música mientras estás de visita en la página?");
      if (respuesta) {
          // Si el usuario acepta, mostrar icono flotante con controles de música
          var musicaIcono = document.createElement("div");
          musicaIcono.id = "iconoMusica";
          musicaIcono.innerHTML = `
              <img src='imagenes/Icono Cancion Niños.jpg' onclick='toggleReproducirPausar()' draggable='true' onmousedown='startDragging(event)' onmouseup='stopDragging(event)'>
          `;
          document.body.appendChild(musicaIcono);
      }
  }

  // Función para reproducir o pausar la música
  function toggleReproducirPausar() {
      var audio = document.getElementById('miAudio');
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
  }

  // Función para iniciar el arrastre del icono
  function startDragging(e) {
      isMouseDown = true;
      var iconoMusica = document.getElementById('iconoMusica');
      offsetX = e.clientX - iconoMusica.getBoundingClientRect().left;
      offsetY = e.clientY - iconoMusica.getBoundingClientRect().top;
  }

  // Función para detener el arrastre del icono
  function stopDragging() {
      isMouseDown = false;
  }

  // Función para mover el icono mientras se arrastra
  document.addEventListener('mousemove', function(e) {
      if (isMouseDown) {
          var iconoMusica = document.getElementById('iconoMusica');
          iconoMusica.style.left = (e.clientX - offsetX) + 'px';
          iconoMusica.style.top = (e.clientY - offsetY) + 'px';
      }
  });

  // Llamar a la función al cargar la página
  window.onload = mostrarAlertaMusica;

  function mostrarTest() {
    var testContainer = document.getElementById("testContainer");
    var resultadoContainer = document.getElementById("resultadoContainer");
    testContainer.style.display = "block";
    resultadoContainer.style.display = "none";  // Asegúrate de ocultar el contenedor de resultados si está visible
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
function mostrarJuego() {
    document.getElementById('juegoContainer').style.display = 'block';
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultadoContainer').style.display = 'none';
}

function mostrarRespuesta(respuesta, idRespuesta) {
    const respuestas = document.querySelectorAll('.resp');
    respuestas.forEach(resp => resp.innerHTML = '');
    document.getElementById(idRespuesta).innerHTML = respuesta;
}
