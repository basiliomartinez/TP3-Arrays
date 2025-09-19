/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58

Dificultad:  🟢🟡

*/

/*
function calcularPerimetro(a, b) {
  return 2 * (a + b);
}

const ladoA = parseInt(prompt("Ingrese el valor del lado A del rectángulo"));
const ladoB = parseInt(prompt("Ingrese el valor del lado B del rectángulo"));

if (isNaN(ladoA) || isNaN(ladoB)) {
  alert("Debe ingresar valores numéricos válidos");
} else {
  const resultado = calcularPerimetro(ladoA, ladoB);
  document.writeln(`<p>El perímetro del rectángulo es: ${resultado}</p>`);
}

*/

function calculoPerimetro(a, b) {
  return 2 * (a + b);
}

const ladoA = parseInt(prompt("Ingrese el valor del lado A del rectangulo"));
const ladoB = parseInt(prompt("Ingrese el valor del lado B del rectangulo"));
if (isNaN (ladoA) || isNaN (ladoB)){
    alert('Debes ingresar valores numericos')
} else{
    const resultado = calculoPerimetro(ladoA, ladoB)
    document.writeln (`<p>El perimetro es ${resultado}</p>`)
}