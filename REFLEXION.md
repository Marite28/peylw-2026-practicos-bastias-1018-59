## 1 imagen y texto alternativo

La imagen está nombrada como "Danza.jpg", guardada en la carpeta img/. el valor del atributo alt que le asigné es: "ilustracion con tematica de luna y estrellas con texto sobre danza"

## 2 Importancia de las etiquetas semánticas

Las etiquetas semánticas le dan significado a cada parte de la página, no solo estructura visual. Un lector de pantalla puede identificar el menú de navegación o el contenido principal gracias al <nav> y al <main>, cosa que no podría hacer si todo estuviera armado con <div>, porque el <div> no dice nada sobre lo que contiene. Además, buscadores como Google usan estas etiquetas para entender mejor de qué trata la página, lo que ayuda a que aparezca en los resultados de búsqueda.

## 3 Verificacion de rutas de navegacion

Para verificar las rutas en el entorno local, abrí la carpeta del proyecto y abrí tanto     index.html como acercade.html con el navegador Edge. Hice click en los enlaces del menú de navegación ("Inicio" y "Acerca de") en las dos páginas, y verifiqué que me ingresen al archivo correspondiente. Para verificar en GitHub Pages, entré al link (https://marite28.github.io/peylw-2026-practicos-bastias-1018-59/) y volví a probar los enlaces "Inicio" y "Acerca de" del menú, confirmando que funcionaban igual que en el entorno local.

# TP3 - Reflexión aplicada

## 1. Campo de Código Postal

    <input type="text" id="cp" name="cp" pattern="^[A-Z]\d{4}[A-Z]{3}$" title="Formato requerido: una letra mayúscula, cuatro dígitos y tres letras mayúsculas. Ej: R8500AAF">

El atributo `pattern` define la expresión regular que debe cumplir el valor: una letra mayúscula, cuatro dígitos y tres letras mayúsculas. El atributo `title` es el mensaje que el navegador muestra cuando el valor no coincide con ese formato.

## 2. La etiqueta label

La etiqueta `<label>` da un texto descriptivo a un campo del formulario. Mejora la accesibilidad, porque los lectores de pantalla leen ese texto al llegar al campo, y la usabilidad, porque al hacer clic en el texto del label el foco pasa al campo asociado.

Se asocia con el atributo `for`, que debe tener el mismo valor que el `id` del campo:

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

## 3. Radio buttons: mismo name vs. distinto name

- Con el mismo `name`, los botones forman un grupo y son excluyentes: al seleccionar uno se desmarca el otro y solo se envía un valor. Es lo que se usa en "Método de contacto preferido".
- Con distinto `name`, cada botón pertenece a un grupo distinto, no se desmarcan entre sí y se pueden seleccionar varios a la vez, lo que rompe el comportamiento de opción excluyente.