Reflexión - Laboratorio 6

Alumna: Marité Bastías Token: bastias-1018-59

1. Elegí el juego Adivinanza de Números. El sistema genera un número aleatorio entre 1 y 100 y yo voy ingresando intentos. Después de cada intento me avisa si el número es "muy alto" o "muy bajo", o si acerté. También cuenta los intentos y calcula un puntaje al ganar.

2. Código de lectura y escritura del record en localStorage

Para leer el record (cuando carga la pagina y cuando se reinicia la partida):

js
function mostrarRecord() {
  const guardado = localStorage.getItem(CLAVE_RECORD);
  if (guardado !== null) {
    parrafoRecord.textContent = "Record Actual: " + guardado + " intentos de " + TOKEN;
  } else {
    parrafoRecord.textContent = "Record Actual: todavía no hay";
  }
}

Para escribir el record (cuando gano e hice menos intentos que el record guardado):

js
const recordGuardado = localStorage.getItem(CLAVE_RECORD);
if (recordGuardado === null || intentos < Number(recordGuardado)) {
  localStorage.setItem(CLAVE_RECORD, intentos);
  mostrarRecord();
  
  mostrarFeedback("¡Ganaste en " + intentos + " intentos! Nuevo record.", "feedback-ok");
}

La clave con la que se guarda es "record-adivinanza-" + TOKEN, así queda asociada a mi token.

3. para evitar que se pueda hacer trampa armé todo el juego dentro de una funcion que se ejecuta sola. así el numero secreto no es una variable global, sino local; si alguien escribe numeroSecreto en la consola, va a dar error porque fuera de esa funcion no existe.
