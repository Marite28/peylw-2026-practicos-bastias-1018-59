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