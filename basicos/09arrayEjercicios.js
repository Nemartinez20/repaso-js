//
// Multilicar un cada elmento de un array por 2
function mult(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    console.log(i);
    newArray.push(array[i] * 2);
  }

  console.log(newArray);
}

let miArray0 = [2, 4, 6, 8, 10];
mult(miArray0);

// con map

function solution(array) {
  return array.map((el) => el * 2);
}

console.log(solution(miArray0));

let segundoArray = [1, 4, 6, 9, 1, 2, 2, 3, 4, 5, 5, 5, 6, 4, 7];

let ordenados = segundoArray.sort((a, b) => a - b);
console.log(ordenados);

//for
console.log("For =============================================");
for (let i = 0; i < segundoArray.length; i++) {
  console.log(segundoArray[i]);
}

// ForEach
console.log("ForEach =============================================");
segundoArray.forEach((el, index) => {
  console.log(el, index);
});

//ejercicios co Html

// const div = document.querySelector("#app");

// let arreglo = [
//   { nombre: "televisor", precio: 500 },
//   { nombre: "Cama", precio: 600 },
//   { nombre: "litera", precio: 700 },
// ];

// arreglo.forEach((el) => {
//   div.innerHTML += `<li>  ${el.nombre} - $ ${el.precio} </li>`;
// });

// arreglo.map((el) => {
//   div.innerHTML += `<li for="">${el.nombre} <input type="checkbox"></li>`;
// });

//
let original = [1, 2, 3];
let copia = original;
copia[0] = "hola";
console.log(original);

console.log("Ejericios =============================================");
//Ejercicios

let nuevoArray = [2, 3, 4, 5, 6];

nuevoArray.push(7); //agrega al final
nuevoArray.unshift(1); //Agrega al inicio  [ 1, 2,3,4, 5, 6, 7 ]
console.log(nuevoArray);
nuevoArray.splice(2, 2); //Eliminar elementos - ( posicio inicial, cuantos elementoa borrar)

console.log(nuevoArray);

console.log(nuevoArray.reverse());

nuevoArray.map((el) => console.log(`hola ${el}`));

let miArray2 = [1, 2, 3, 4, 5];
miArray2.push(6);
miArray2.unshift(0);
miArray2.splice(6, 1);
console.log(miArray2);

//📌 Ejercicio:
//Crea un array con los nombres de 3 frutas.
//Recorre el array e imprime cada fruta en la consola.
let frutas = ["banana", "manzana", "mandarina"];

for (let i = 0; i < frutas.length; i++) [console.log(frutas[i])];

frutas.forEach((el) => console.log(el));
frutas.map((el) => console.log(el));

let numeros = [10, 20, 30, 40, 50];
console.log(numeros.includes(25)); //verifica si existe un elemnto
console.log(numeros.indexOf(30)); //devuelve la posicion de un elento y si existe

let pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(pares.filter((el) => el % 2 == 0)); // filtrar numero pares

console.log(miArray2.map((el) => el * 2)); // devuelve un array , pero bajo cierta condicion

let suma = pares.map((acum, numero) => acum + numero, 0);
console.log(suma);
console.log("Nuevo =============================================");

let fruits = ["Manzana", "Mandariana", "lulo", "Pera"];

fruits.forEach((Element, index, fruits) => {
  console.log(Element, index, fruits);
});

fruits.forEach((el, index) => {
  console.log(`el elemento es: ${el}, y su indice es ${index}`);
});

fruits.map((el, index, array) => {
  array[1] = "Mango";
  console.log(el);
});

let numerosArray = [2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 151, 6, 12, 18];
let pares1 = [];
let impares = [];
numerosArray.forEach((el) => {
  if (el % 2 === 0) {
    pares1.push(el);
  } else {
    impares.push(el);
  }
});

console.log(pares1);
console.log(impares);

//Sumar con foreach
let suma1 = 0;
numerosArray.forEach((el) => {
  suma1 += el;
});

console.log(suma1);
//Sumar con reduce
let total = numerosArray.reduce((acum, num) => acum + num, 0);
console.log(total);
