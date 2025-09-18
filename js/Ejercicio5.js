/*
TP3 – Ejercicio 5
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena, la función determina si está formada solo por MAYÚSCULAS, solo por minúsculas
o por una mezcla de ambas.
*/

// Función que analiza el texto y devuelve un mensaje
function analizarTexto(cadena) {
  // asumimos que cadena es un string no vacío
  if (cadena === cadena.toUpperCase()) {
    return "El texto está en MAYÚSCULAS.";
  } else if (cadena === cadena.toLowerCase()) {
    return "El texto está en minúsculas.";
  } else {
    return "El texto tiene mezcla de MAYÚSCULAS y minúsculas.";
  }
}

// Programa principal: pedir, validar y mostrar
const texto = prompt("Ingrese una cadena de texto");

if (texto === null || texto.trim() === "") {
  alert("Debe ingresar un texto válido");
} else {
  const resultado = analizarTexto(texto);
  document.writeln(`<p>${resultado}</p>`);
}
