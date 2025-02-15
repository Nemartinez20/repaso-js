console.log("======================================");

// const numero = [1, 2, 3, 4, 2, 5, 6, 7, 4, 3, 8, 9, 7, 0, 9];
// const cadena = ["hola", "como", "estan", "en", "lavida", "literal"];
// const array = ["hola mundo el chanchito feliz de Nicolas"];

// // console.log(numero.splice(2, 5)); // splice
// // console.log(cadena.slice(1, 4));
// console.log(array[0].split(" "));
console.log("========== Ejercicio 1=================");

//Extrae los primeros 3 elementos de un array de números.
let numeros = [10, 20, 30, 40, 50];
let primeros3 = numeros.slice(0, 3);
console.log(primeros3);

console.log("========== Ejercicio 2 =================");

//Extrae los últimos 2 elementos de un array.
let numeros2 = [10, 20, 30, 40, 50];
console.log(numeros2);

let ultimos2 = numeros2.slice(3, 5);
console.log(ultimos2);

let frutas = ["manzana", "pera", "naranja", "kiwi", "uva"];
console.log("original", frutas);
console.log("final", frutas.slice(-2));

console.log("========== Ejercicio 3 =================");

//Crea un nuevo array sin el primer y último elemento.
let colores = ["rojo", "verde", "azul", "amarillo", "morado"];
console.log("original", colores);
console.log("final", colores.slice(1, -1));

console.log("========== Ejercicio 4 =================");
//Crea una copia de un array usando slice().
let original = ["a", "b", "c", "d"];
console.log("inicial", original);
console.log("final", original.slice());
console.log(original === original.slice());

console.log("========== Ejercicio 5=================");

//Extrae las primeras 3 palabras de una oración.

let cadena = "mi cadena es la mejor del mundo";
console.log("inicial", cadena);

let nuevoarray = cadena.split(" "); //  separa cada vez que encuentre un espacio
console.log(nuevoarray);
let extraer = nuevoarray.slice(0, 3); // extrae de un array las tres primeras posiciones
let union = extraer.join(" "); // vuelve a unir el array en cadena por espacios
console.log(union);

console.log("========== Ejercicio 6 =================");

//Crea un nuevo array a partir del tercer elemento.

let numeroOtro = [2, 4, 5, 6, 7, 8, 9];
console.log(numeroOtro);
console.log(numeroOtro.slice(2));

console.log("========== Ejercicio 7 =================");

//Crea una función extraerRango(arr, inicio, fin) que devuelva un rango de elementos.

function extracion(array, inicio, fin) {
  console.log(array.slice(inicio, fin));
}

extracion(numeroOtro, 2, -2);
