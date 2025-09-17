/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

function parOimpar(numero) {
  if (isNaN(numero)) {
    return "Debes ingresar un numero valido";
  }
  if (numero % 2 === 0) {
    return `El numero ${numero} es PAR`;
  } else {
    return `El numero ${numero} es IMPAR`;
  }
}

//Pido un numero
const entrada = parseInt(prompt("Ingrese un numero"));

//Llamo a la funcion y guardo el resultado

const resultado = parOimpar(entrada);
//console.log (resultado)
document.writeln(resultado)



/*
Comparación lado a lado
Sin función (como antes en bucles):

const numero = 5;
if (numero % 2 === 0) {
  document.writeln("El número es par");
} else {
  document.writeln("El número es impar");
}
👉 La lógica y la salida están mezcladas.

===
👉 Entonces, la diferencia es que hasta ahora tus ejercicios mostraban directamente, y acá en TP3 empezás a devolver valores con return.
Eso te prepara para cuando hagas programas más grandes, donde separar lógica de presentación es fundamental.
===
*/