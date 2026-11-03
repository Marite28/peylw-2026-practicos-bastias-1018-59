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