console.log("Script cargado exitosamente");

function vincular(idCampo, idCelda, evento) {
  const campo = document.getElementById(idCampo);
  const celda = document.getElementById(idCelda);

  if (!campo || !celda) return;

  campo.addEventListener(evento, function () {
    celda.innerText = campo.value;
  });
}

vincular("nombre", "resumen-nombre", "input");
vincular("apellido", "resumen-apellido", "input");
vincular("email", "resumen-email", "input");
vincular("telefono", "resumen-telefono", "input");
vincular("direccion", "resumen-direccion", "input");
vincular("cp", "resumen-cp", "input");
vincular("provincia", "resumen-provincia", "input");

const inputEdad = document.getElementById("edad");
const celdaEdad = document.getElementById("resumen-edad");

if (inputEdad && celdaEdad) {
  inputEdad.addEventListener("input", function () {
    const edad = parseInt(inputEdad.value);

    if (!isNaN(edad) && edad < 18) {
      celdaEdad.innerText = edad + " (Menor de edad)";
      celdaEdad.style.backgroundColor = "#ffcccc";
    } else {
      celdaEdad.innerText = inputEdad.value;
      celdaEdad.style.backgroundColor = "";
    }
  });
}

const radiosMetodo = document.querySelectorAll('input[name="metodo"]');
const celdaMetodo = document.getElementById("resumen-metodo");

function actualizarMetodo() {
  const elegido = document.querySelector('input[name="metodo"]:checked');
  celdaMetodo.innerText = elegido ? elegido.value : "";
}

if (radiosMetodo.length > 0 && celdaMetodo) {
  radiosMetodo.forEach(function (radio) {
    radio.addEventListener("change", actualizarMetodo);
  });
  actualizarMetodo();
}

const checksSuscripcion = document.querySelectorAll('input[name="suscripcion"]');
const celdaSuscripciones = document.getElementById("resumen-suscripciones");

function actualizarSuscripciones() {
  const marcadas = [];
  checksSuscripcion.forEach(function (check) {
    if (check.checked) {
      marcadas.push(check.value);
    }
  });
  celdaSuscripciones.innerText = marcadas.length > 0 ? marcadas.join(", ") : "Ninguna";
}

if (checksSuscripcion.length > 0 && celdaSuscripciones) {
  checksSuscripcion.forEach(function (check) {
    check.addEventListener("change", actualizarSuscripciones);
  });
  actualizarSuscripciones();
}

const btnLeerMas = document.getElementById("btn-leer-mas-bastias-1018-59");
const cvCompleto = document.querySelector(".cv-completo");

if (btnLeerMas && cvCompleto) {
  btnLeerMas.addEventListener("click", function () {
    if (cvCompleto.style.display === "block") {
      cvCompleto.style.display = "none";
      btnLeerMas.innerText = "Leer más";
    } else {
      cvCompleto.style.display = "block";
      btnLeerMas.innerText = "Leer menos";
    }
  });
}

// ===================================================================
// LABORATORIO 6: Adivinanza de Números
// Todo el juego vive dentro de una función que se ejecuta sola, así
// el número secreto NO queda en una variable global y no se puede
// leer desde la consola del navegador.
// ===================================================================
(function () {
  const TOKEN = "bastias-1018-59";
  const CLAVE_RECORD = "record-adivinanza-" + TOKEN;

  // Si esta página no tiene el juego (index, contacto, etc.), no hace nada
  const juego = document.getElementById("juego");
  if (!juego) return;

  const spanIntentos = document.getElementById("intentos");
  const spanPuntos = document.getElementById("puntos");
  const parrafoRecord = document.getElementById("record");
  const entrada = document.getElementById("entrada-numero");
  const btnProbar = document.getElementById("btn-probar-" + TOKEN);
  const btnReiniciar = document.getElementById("btn-reiniciar-" + TOKEN);
  const feedback = document.getElementById("feedback");

  // Estado del juego (locales a esta función, no globales)
  let numeroSecreto = 0;
  let intentos = 0;
  let puntos = 0;
  let terminado = false;

  function mostrarFeedback(texto, clase) {
    feedback.textContent = texto;
    feedback.className = "panel-feedback " + clase;
  }

  function actualizarEstadisticas() {
    spanIntentos.textContent = intentos;
    spanPuntos.textContent = puntos;
  }

  function mostrarRecord() {
    const guardado = localStorage.getItem(CLAVE_RECORD);
    if (guardado !== null) {
      parrafoRecord.textContent = "Récord Actual: " + guardado + " intentos de " + TOKEN;
    } else {
      parrafoRecord.textContent = "Récord Actual: todavía no hay";
    }
  }

  // Inicialización: número aleatorio, limpiar campos y cargar récord
  function iniciar() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    puntos = 0;
    terminado = false;

    entrada.value = "";
    entrada.disabled = false;
    btnProbar.disabled = false;

    actualizarEstadisticas();
    mostrarRecord();
    mostrarFeedback("¡Empezá a jugar! Adiviná un número entre 1 y 100.", "feedback-neutro");
    entrada.focus();
  }

  // Finalización: puntos, récord y bloqueo del juego
  function finalizar() {
    terminado = true;
    puntos = Math.max(10, 110 - intentos * 10);
    actualizarEstadisticas();

    entrada.disabled = true;
    btnProbar.disabled = true;

    const recordGuardado = localStorage.getItem(CLAVE_RECORD);
    if (recordGuardado === null || intentos < Number(recordGuardado)) {
      localStorage.setItem(CLAVE_RECORD, intentos);
      mostrarRecord();
      mostrarFeedback("¡Ganaste en " + intentos + " intentos! Nuevo récord.", "feedback-ok");
    } else {
      mostrarFeedback("¡Ganaste en " + intentos + " intentos!", "feedback-ok");
    }
  }

  // Procesamiento de un turno
  function procesarIntento() {
    if (terminado) return;

    const numero = parseInt(entrada.value);

    if (isNaN(numero) || numero < 1 || numero > 100) {
      mostrarFeedback("Ingresá un número entero entre 1 y 100.", "feedback-error");
      return;
    }

    intentos++;
    spanIntentos.textContent = intentos;

    if (numero === numeroSecreto) {
      finalizar();
    } else if (numero > numeroSecreto) {
      mostrarFeedback(numero + " es muy alto. Intentá de nuevo.", "feedback-alto");
    } else {
      mostrarFeedback(numero + " es muy bajo. Intentá de nuevo.", "feedback-bajo");
    }

    entrada.value = "";
    entrada.focus();
  }

  btnProbar.addEventListener("click", procesarIntento);

  entrada.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      procesarIntento();
    }
  });

  btnReiniciar.addEventListener("click", iniciar);

  iniciar();
})();
