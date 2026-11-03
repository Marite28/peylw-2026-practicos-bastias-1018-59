# Reflexión aplicada - TP4

## 1. Código CSS de la animación del logo del CURZA

```css
.logo-curza {
  transition: transform 1s ease-in-out;
}

.logo-curza:hover {
  transform: rotateY(360deg);
}
```

## 2. ¿Por qué hace falta `background-color` en un elemento `position: sticky`?

Un elemento sticky se queda pegado arriba mientras el contenido se desplaza, pero por defecto es transparente. El texto de la biografía pasa por detrás del `<h2>` y, como no hay nada que lo tape, se ve mezclado con el título y se vuelve imposible de leer. Si no se define un color de fondo, el título "flota" sobre el texto que sube y se superponen. Con un fondo sólido (y `z-index`) el título tapa el texto que pasa por debajo y se lee bien.

## 3. Cambio visual en pantallas menores a 768px

Con la regla `@media (max-width: 768px)` los enlaces del menú dejan de estar en fila y se apilan uno debajo del otro (`flex-direction: column`). El formulario pasa de dos columnas (etiqueta al lado del campo) a una sola, con la etiqueta arriba del campo y el botón a todo el ancho. Además se reducen los márgenes laterales, y la tabla queda dentro de un contenedor con `overflow-x: auto`, así que se desplaza horizontalmente en lugar de romper el ancho de la pantalla.



# Reflexión - Laboratorio 5

## 1. Código para validar la edad

```javascript
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
```

## 2. ¿Por qué usé `input` y no `change`?

Usé `input` porque reacciona en el momento: cada vez que escribo o borro
una letra, la tabla se actualiza al instante. `change`, en cambio, espera
a que termine de escribir y salga del campo (o apriete Enter) para
recién ahí avisar que algo cambió. Como lo que pedía el trabajo era que la
tabla se fuera llenando mientras escribo, `input` era la opción que
servía. Con `change` tendría que salir del campo cada vez para ver el
resultado. En los botones de opción y en las casillas sí usé `change`,
porque ahí el cambio pasa de una sola vez, cuando hago clic.

## 3. ¿Cómo evité los errores entre páginas?

Como el mismo `script.js` se usa en las dos páginas, algunas cosas que
busca en una no existen en la otra. Por ejemplo, el botón "Leer más" está
solo en `acercade.html`. Si el código lo busca estando en `contacto.html`,
no lo encuentra y devuelve `null`, y al intentar usarlo salta un error en
la consola. Para evitarlo, antes de usar cada elemento puse un `if` que
pregunta "existe este elemento?". Si existe, se ejecuta el código; si
no, simplemente se lo saltea. Con el formulario pasa lo mismo, pero al
revés: solo existe en `contacto.html`.