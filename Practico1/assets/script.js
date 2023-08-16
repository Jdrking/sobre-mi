// Espera a que el contenido del DOM esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
  // Obtén las referencias a los elementos HTML relevantes
  const calculoButton = document.getElementById('calculo');
  const resetButton = document.getElementById('reset');

  // Agrega un evento de click al botón "Calcular" y al botón "C"
  calculoButton.addEventListener('click', calculo);
  resetButton.addEventListener('click', reset);

  // Función para realizar el cálculo cuando se hace clic en el botón "Calcular"
  function calculo() {
    // Obtén los valores de los campos de entrada y el operador // Obtener el valor del campo de entrada 'num1' y eliminar espacios en blanco al principio y al final
    const num1Input = document.getElementById('num1').value.trim();// Esto asegura que se capture el valor ingresado por el usuario, accedemos a "num1", al "value" y hacemos el metodo.trim() para eliminar los espacios en blanco                                                               
    const num2Input = document.getElementById('num2').value.trim();
    const operador = document.getElementById('operador').value;
    const parrafoResultado = document.getElementById('resultado');

    // Función para validar si una entrada es un número válido // Comprueba si la entrada cumple con el patrón de un número válido
    // El patrón acepta números enteros y decimales, positivos o negativos
    // ^[-+]?: Comienza con un signo opcional (+ o -)
    // \d*\.?\d+$: Luego puede haber cero o más dígitos, seguidos opcionalmente por un punto decimal y más dígitos
    function isValidInput(input) {
      return /^[-+]?\d*\.?\d+$/.test(input); //esta funcion "espresion regular" la obtuve investigando por internet ya que no conocia esta opcion interesante
    }
    // Validar las entradas antes de realizar los cálculos
    if (!isValidInput(num1Input) || !isValidInput(num2Input)) {
      alert("Ingrese números válidos");
      parrafoResultado.textContent = 'Por favor ingresa números válidos.';
      return;
    }

    // Convertir las entradas en números de punto flotante
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    // Validar división por cero
    if (operador === 'division' && num2 === 0) {
      alert("No se puede dividir por cero");
      parrafoResultado.textContent = 'No se puede dividir por 0.';
      return;
    }

    // Realizar la operación basada en el operador seleccionado
    let resultado;
    switch (operador) {
      case 'suma':
        resultado = num1 + num2;
        break;
      case 'resta':
        resultado = num1 - num2;
        break;
      case 'multiplicacion':
        resultado = num1 * num2;
        break;
      case 'division':
        resultado = num1 / num2;
        break;
      default:
        alert("Operador no válido");
        parrafoResultado.textContent = 'Operador no válido.';
        return;
    }

    // Convertir el resultado a texto
    const resultadoString = resultado.toString();

    // Mostrar el resultado o mensajes de error según las condiciones
    if (resultadoString.includes('e') || resultadoString.includes('E')) {
      parrafoResultado.textContent = 'Error: el resultado está en notación científica.';
    } else if (resultadoString.length > 10) {
      parrafoResultado.textContent = 'Error: el resultado es demasiado grande para mostrar.';
    } else if (resultado > 1e10 || resultado < -1e10) {
      parrafoResultado.textContent = 'Error: el resultado es demasiado grande o pequeño.';
    } else {
      parrafoResultado.textContent = 'Resultado: ' + resultadoString;
    }
  }

  // Función para restablecer los campos y el resultado
  function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').textContent = '';
  }
});
