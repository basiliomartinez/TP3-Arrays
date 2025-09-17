//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Titulo
document.writeln(`<h3>Lista de meses del año</h3>`);
//Inicio lista
document.writeln(`<ul class="list-group">`);
//Recorro el array
for (let i = 0; i < meses.length; i++) {
  document.writeln(`<li class="list-group-item">${meses[i]}</li>`);
}
document.writeln(`</ul>`);
