/*
TP3 – Ejercicio 7
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla.
La creación de la tabla debe ser realizada con una función y mostrar solo los resultados
del 1 al 10 del número elegido por el usuario.
*/
function tablaMultiplicar(numero) {
  //Creo array para guardar cada linea de la tabla
  const lineas = [`<h3>Tabla de multiplicar del ${numero}</h3>`];
  //Recorremos
  for (let i = 1; i <= 10; i++) {
    lineas.push(`<p> ${numero} x ${i} = (${numero * i})</p>`); //Agrego una nueva linea al array en cada vuelta
  }
  return lineas.join("");
}

//Scripy principal
const numero = parseInt(
  prompt(`Ingrese un numero y vera su tabla de multiplicar`)
);
if (isNaN(numero)) {
  alert(`Ingresar un numero valido`);
} else {
  const tabla = tablaMultiplicar(numero);
  document.writeln(tabla);
}
