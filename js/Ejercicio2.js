/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

const ciudades = [];
let seguir = true;

do {
  const entrada = prompt("Ingrese una ciudad (cancele para terminar)");

  if (entrada === null) {
    seguir = false; // se cancela
  } else if (entrada.trim() === "") {
    alert("Ingrese un texto valido"); // el usuario escribe vacío
  } else {
    ciudades.push(entrada.trim()); // texto válido, lo agrego al array
  }
} while (seguir);

// Mostramos lo que se cargó inicialmente
document.writeln(`<h3>Ciudades cargadas (${ciudades.length})</h3>`);
document.writeln(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);

// Longitud
document.writeln(`<p>Longitud del arreglo: ${ciudades.length}</p>`);

// Primera, tercera y última
const primera = ciudades[0];
const tercera = ciudades[2];
const ultima = ciudades[ciudades.length - 1];
document.writeln(`<p>Posición primera: ${primera}</p>`);
document.writeln(`<p>Posición tercera: ${tercera}</p>`);
document.writeln(`<p>Posición última: ${ultima}</p>`);

// Añadir París al final
ciudades.push("París");
document.writeln(`<p>Agregamos a París al final</p>`);

// Elemento en segunda posición
const segunda = ciudades[1];
document.writeln(`<p>Posición segunda (antes): ${segunda}</p>`);

// Sustituir la segunda posición por Barcelona con splice
ciudades.splice(1, 1, "Barcelona");
document.writeln(`<p>Reemplazamos la segunda posición por Barcelona</p>`);

// 🚀 Mostrar el arreglo final después de todos los cambios
document.writeln(`<h3>Arreglo final</h3>`);
document.writeln(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);
