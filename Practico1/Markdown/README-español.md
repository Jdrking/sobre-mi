# Calculadora Web

Este es un proyecto simple de una calculadora web desarrollada utilizando HTML, JavaScript y CSS. La calculadora permite realizar operaciones básicas como suma, resta, multiplicación y división.

## Características

- Interfaz de usuario intuitiva.
- Realiza cálculos basicos en tiempo real.
- Manejo de errores para entradas inválidas y divisiones por cero.
- Notificación de errores para resultados en notación científica o valores extremadamente grandes o pequeños.

## Vista previa

![Calculadora](./assets/calculadora_preview.png)

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web para acceder a la calculadora.
3. Introducir un numero en el primer input.
4. Elegir el operador(suma, resta, multiplicacion o division).
5. Introducir un numero en el segundo input.
6. Hacer click en el boton "calcular"(saldra el resultado de la operacion debajo).
7. Hacer click en el boton "C" para borrar todos los campos.
8. Volver al punto 3 y repetir pasos si desea realizar otra operacion.

## Personalización

Si deseas personalizar los estilos o funcionalidades de la calculadora, puedes hacerlo modificando los archivos CSS (`calcuestilo.css`), JavaScript (`script.js`) y el HTML (`index.html`).

### Estilos

Los estilos de la calculadora se pueden personalizar modificando el archivo `calcuestilo.css`. Puedes ajustar los colores, tamaños de fuente, márgenes y más.

### Funcionalidades

Si deseas agregar o modificar las operaciones disponibles, ajustar los límites de los resultados o mejorar la interfaz, puedes hacerlo editando el archivo `script.js`.

## Prueba y Depuración

Durante el desarrollo de este proyecto, se llevaron a cabo diversas pruebas para garantizar su funcionamiento correcto y la solución de posibles problemas. Aquí se documentan algunos de los ejemplos y casos que se encontraron, así como las soluciones que se implementaron:

### Espacios en los Inputs

En una versión anterior, se permitía ingresar espacios en blanco en los campos de entrada numérica. Esto podía llevar a errores inesperados en los cálculos. Para resolver este problema:

- **Caso de Prueba:** Se ingresaba "  5  " en el campo de entrada para el primer número.
- **Solución Implementada:** Se aplicó el método `trim()` a los valores de entrada para eliminar los espacios en blanco al principio y al final antes de realizar los cálculos.

### Notación Científica en los Resultados

Hubo una versión en la que los resultados podían aparecer en notación científica, lo cual no era adecuado para la interfaz de usuario y la comprensión general. Para abordar este problema:

- **Caso de Prueba:** Se realizaba una suma que daba como resultado "1e12".
- **Solución Implementada:** Se añadió una validación para verificar si el resultado como cadena contiene "e" o "E", lo que indica notación científica. En caso afirmativo, se mostraba un mensaje de error.

### Expresión Regular para Validar Ingresos

Se utilizó una expresión regular para validar las entradas numéricas en los campos de input y asegurar que solo se acepten números válidos. Esto se hizo para prevenir errores y garantizar una experiencia de usuario coherente.

- **Propósito:** Asegurar que las entradas sean números enteros o decimales válidos, y evitar problemas de formato.
- **Caso de Uso:** Si el usuario ingresaba "abc" en lugar de un número.
- **Solución Implementada:** Se utilizó la expresión regular `/^[-+]?\d*\.?\d+$/` para validar las entradas, permitiendo números enteros y decimales, con signo opcional y un punto decimal opcional.

Estos ejemplos ilustran cómo se identificaron y resolvieron problemas durante el desarrollo de la calculadora web. Las pruebas y la depuración son componentes esenciales para garantizar un funcionamiento fluido y preciso del proyecto.


## Contribuciones

Si encuentras algún problema, tienes ideas de mejora o deseas contribuir de alguna manera, ¡siéntete libre de hacerlo! Puedes abrir un _issue_ o enviar una solicitud de extracción.

## Autor

Jorge Rey



