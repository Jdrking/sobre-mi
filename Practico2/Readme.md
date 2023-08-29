# Juego de Piedra, Papel o Tijera

¡Bienvenido al emocionante juego de Piedra, Papel o Tijera! En este proyecto, hemos creado una versión digital de este clásico juego en el que compites contra la computadora para ver quién gana más rondas. ¡Diviértete y demuestra tus habilidades estratégicas!

## Cómo jugar

1. Abre el archivo `index.html` en tu navegador favorito para comenzar el juego.
2. Se te solicitará que ingreses tu nombre. Sin un nombre, no podrás jugar. Si haces clic en "Cancelar", el juego no comenzará.
3. En cada turno, selecciona una de las tres opciones: piedra 🥌, papel 📋 o tijera ✂️. Simplemente haz clic en el botón correspondiente.
4. Después de tu elección, la computadora elegirá al azar su opción.
5. El ganador del turno se determina según las reglas clásicas: piedra vence a tijera, tijera vence a papel y papel vence a piedra.
6. Ganas un punto si vences a la computadora en un turno. El objetivo es llegar a 5 puntos primero para ganar el juego.
7. Si deseas reiniciar el juego en cualquier momento, simplemente haz clic en el botón "Reiniciar juego".

## Detalles de Implementación

### HTML
El archivo `index.html` define la estructura del juego utilizando elementos HTML. El encabezado contiene el título y una breve descripción del juego. El cuerpo contiene los siguientes elementos:
- Una sección de instrucciones que indica el objetivo del juego.
- Un marcador que muestra los nombres y puntajes del jugador y la computadora.
- Una sección que permite al jugador elegir su arma para el próximo turno.
- Una sección de mensajes que muestra las elecciones y resultados del turno.
- Un botón para reiniciar el juego.

### CSS
El archivo `estilo.css` define el estilo visual del juego. Utiliza la fuente "Heebo" de Google Fonts para dar un aspecto moderno. Aquí hay algunas características destacadas:
- Fondos y colores que distinguen las secciones y resaltan la información.
- Animaciones de clic para dar retroalimentación visual cuando se elige una opción.
- Diseño flexible para adaptarse a diferentes tamaños de pantalla.

### JavaScript
El archivo `codigo.js` contiene la lógica del juego. Aquí está una descripción de las funciones principales:
- `iniciarTurno(e)`: Se llama cada vez que el jugador elige una opción. Determina el ganador del turno y actualiza los puntajes y mensajes en consecuencia.
- `ganaUsuario()`, `ganaPC()`, `empate()`: Actualizan los puntajes y mensajes cuando el jugador gana, la computadora gana o hay un empate.
- `reiniciarJuego()`: Restablece los puntajes, muestra un mensaje y permite al jugador ingresar su nombre nuevamente antes de continuar.

## Instalación y Uso

1. Descarga o clona este repositorio en tu computadora.
2. Abre el archivo `index.html` en tu navegador web para iniciar el juego.
3. Sigue las instrucciones en pantalla para jugar y disfrutar.

¡Esperamos que te diviertas jugando al clásico juego de Piedra, Papel o Tijera! Si tienes alguna pregunta o comentario, no dudes en contactarnos.

## Créditos

Este juego fue creado por Jorge Rey utilizando tecnologías web estándar como HTML, CSS y JavaScript.
