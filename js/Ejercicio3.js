/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

//Funcion simula dado
function dado() {
  return Math.floor(Math.random() * 6) + 1; //1.....6
}

//Array de conteo, indices de 2 a 12, debe arrancar en cero
const apariciones = [];
for (let s = 2; s<=12; s++ ){
    apariciones[s]=0
}

for (let intento = 1; intento <= 50; intento++) {
  const d1 = dado();
  const d2 = dado();
  const suma = d1 + d2;

  //Incremento contador de esa suma
  apariciones[suma] = apariciones[suma] + 1;
}
//Mostramos resultados
document.writeln(
  `<h3>Numero de apariciones de la suma en 50 repeticiones</h3>`
);
document.writeln(`<ul class="list-group">`);
for (let suma = 2; suma <= 12; suma++) {
  document.writeln(
    `<li class="list-group-item">Suma ${suma}: ${apariciones[suma]} apariciones</li>`
  );
}
document.writeln(`</ul>`);
