/*Santa Claus 🎅 ha recibido una lista de números mágicos que 
representan regalos 🎁, pero algunos de ellos están duplicados 
y deben ser eliminados para evitar confusiones. Además, los regalos 
deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una 
lista de números enteros (que pueden incluir duplicados)
 y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

const lista = [1, 1, 2, 3, 2, 4, 5, 3, 4, 6, 7, 8, 9, 6, 7, 5, 4, 8];

function ordenarYfiltrar(regalos) {
  ordenados = regalos.sort((a, b) => a - b);
  repetidos = [...new Set(ordenados)];
  console.log(ordenados);
  console.log(repetidos);
}

ordenarYfiltrar(lista);

console.log(lista.at(7));
console.log(lista.includes(8));

console.log("========= Ejercicios 1 ===============");

// Buscar un objeto en un array

//Con find busca el primer coincidencia
let personas = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];

let persona = personas.find((el) => el.edad > 25);
console.log(persona);

console.log("========= Ejercicios 2 ===============");

//Buscar un elemento por nombre
let frutas = ["manzana", "pera", "naranja", "uva"];
let fruta = frutas.find((el) => el === "uva");
console.log(fruta);

console.log("========= Ejercicios 2 ===============");

let numeros = [5, 10, 15, 20];

let num = numeros.find((el, index, array) => {
  console.log(
    `el elemento es ${el}, y su indice es ${index}, del array ${array}`
  );
  return el > 12;
});

console.log(num);

console.log("========= Ejercicios con indexof===============");

console.log(numeros.indexOf(10)); // si esta  = 1
console.log(numeros.indexOf(100)); //no esta  = -1
