/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

const misAnimales = ["perro", "gato", "loro", "vaca", "leon"];

// 2. Añade dos más. Uno al principio y otro al final

misAnimales.push("tigre");
misAnimales.unshift("pantera");
console.log(misAnimales);

// 3. Elimina el que se encuentra en tercera posición
misAnimales.splice(3, 1);
console.log(misAnimales);

// 4. Crea un set que almacene cinco libros

miSet = new Set([
  "unolibro",
  "doslibros",
  "treslibros",
  "cuatrolibros",
  "cincolibros",
]);

// 5. Añade dos más. Uno de ellos repetido

miSet.add("seislibros");
miSet.add("sietelibros");
miSet.add("sietelibros"); //repetido
console.log(miSet);

// 6. Elimina uno concreto a tu elección
miSet.delete("treslibros");
console.log(miSet);

// 7. Crea un mapa que asocie el número del mes a su nombre
miMapa = new Map([
  ["1", "enero"],
  ["2", "febrero"],
  ["3", "Marzo"],
  ["4", "Abril"],
  ["5", "Mayo"],
  ["6", "Junio"],
  ["7", "Julio"],
]);

console.log(miMapa);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(miMapa.has("5")); //true

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

array2 = [2, 3, 4, 5, 6, "juan", "laura"];

miotroSet = new Set(array2);
console.log(miotroSet);
