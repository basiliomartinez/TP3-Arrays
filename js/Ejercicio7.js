/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

/*const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Debe ingresar números válidos");
} else {
  if (numero1 > numero2) {
    document.writeln(`<p>El número mayor es: ${numero1}</p>`);
  } else if (numero2 > numero1) {
    document.writeln(`<p>El número mayor es: ${numero2}</p>`);
  } else {
    document.writeln(`<p>Ambos números son iguales</p>`);
  }
}

 */

/**
 // Función que devuelve el mayor de dos números
function numeroMayor(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "iguales"; // caso especial
  }
}

// Programa principal
const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Debe ingresar números válidos");
} else {
  const resultado = numeroMayor(numero1, numero2);

  if (resultado === "iguales") {
    document.writeln(`<p>Ambos números son iguales</p>`);
  } else {
    document.writeln(`<p>El número mayor es: ${resultado}</p>`);
  }
}

 */

/*
🔹 Versión 1 — Estilo directo (plano, sin función)
const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Debe ingresar números válidos");
} else {
  if (numero1 > numero2) {
    document.writeln(`<p>El número mayor es: ${numero1}</p>`);
  } else if (numero2 > numero1) {
    document.writeln(`<p>El número mayor es: ${numero2}</p>`);
  } else {
    document.writeln(`<p>Ambos números son iguales</p>`);
  }
}

 */