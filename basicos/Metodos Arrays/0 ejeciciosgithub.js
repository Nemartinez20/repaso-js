// https://github.com/Ada-Online-2da-Gen/ejercicios-javascript/blob/master/05-estructuras-de-datos-arrays.md

console.log("========= Ejercicios 1 ===============");

/*Crear un programa que pida ingresar nombres 
separados por espacios y devuelva un mensaje que 
contenga un saludo a cada persona. Ejemplo:
*/

// Ingrese nombres: Ada Greta Grace

// ¡Hola Ada!
// ¡Hola Greta!
// ¡Hola Grace!

let nombres = "juan jose maria pedro";

let array = nombres.split(" ");
console.log(array);

array.map((el) => console.log(`Hola ${el}`));

console.log("========= Ejercicios 2===============");

/*
Crear un programa que pida ingresar números 
separados por espacios y devuelva un mensaje con 
el menor número ingresado. Ejemplo:

*/

let numeros = [2, 6, 7, 8, 4, 3, 5];
console.log(numeros);
let numeroMenor = Math.min(...numeros);
console.log("numero menor", numeroMenor);

console.log("========= Ejercicios 3 ===============");

/*
Crear un programa que pida ingresar números 
separados por espacios y devuelva un mensaje con la suma de 
todos los números. Ejemplo:

 */

let nums = [3, 4, 5, 6, 7, 2];
console.log(nums);

let suma = nums.reduce((acum, elemento) => acum + elemento, 0);
console.log("la suma es", suma);

console.log("========= Ejercicios 4 ===============");

/*
Crear un programa que permite ingresar valores separados por espacios
, y luego preguntar qué valor se desea averiguar si existe.
 El programa debe devolver un mensaje diciendo si dicho valor 
 se encuentra dentro de los valores originales o no

 */

let nums2 = [3, 4, 5, 6, 7, 2];
console.log(nums2);

let n = 8;

if (nums2.includes(n)) {
  console.log(" si existe el numero", n);
} else {
  console.log(`no existe el numero ${n}, vuelve a intenterlo`);
}

console.log("========= Ejercicios 5 ===============");

/*
Crear un programa que permite ingresar valores separados por espacios, 
y luego preguntar qué valor se desea encontrar el índice.
 El programa debe devolver un mensaje con el índice del primer
  elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo

 */
let nums3 = [3, 4, 5, 6, 7, 2];
console.log(nums3);
let n2 = 5;
let rta = nums3.indexOf(n2);
console.log(`El numero ${n2} esta en el indice ${rta}`);

function palabrasJuntas(nombre) {}
