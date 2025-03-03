//Splice

let numeros = [10, 20, 30, 40, 50];

//Eliimna el 2,3 numero de array
// (Inicio(posicion), cuantos(elementos a eliminar))
let eliminados = numeros.splice(1, 3);

console.log(numeros);
console.log(eliminados);

//Agregar "sandía" y "mango" en la segunda posición del array.
let frutas = ["manzana", "pera", "naranja"];
console.log(frutas);

frutas.splice(1, 0, "sandia", "Mango");
console.log(frutas);

//reemplazar "pera" por "uva" en el array.
let frutas2 = ["manzana", "pera", "naranja"];
console.log(frutas2);

frutas2.splice(1, 1, "uva");
console.log(frutas2);

//Eliminar "banana" y "uva", y agregar "kiwi" y "mango".
let frutas3 = ["manzana", "banana", "uva", "naranja"];
console.log(frutas3); // ["manzana", "banana", "uva", "naranja"]

frutas3.splice(1, 2, "kiwi", "mango");
console.log(frutas3); // ["manzana", "kiwi", "mango", "naranja"]

const numeros2 = [1, 2, 4, 5, 6, "lorena", "cata", "lina"];

numeros2.splice(2, 1, "pedro");
numeros2.splice(3, 2, "Ana", "Maria");
numeros2.splice(2, 0, "Juan", "Jose", "duquino");
console.log(numeros2);

console.log("============= Ejercicios Eliminar ====================");

let frutase = ["manzana", "pera", "naranja", "uva"];
console.log(frutase);

let index = frutase.indexOf("pera");

if (index != -1) {
  console.log("si existe");
  frutase.splice(index, 1);
} else {
  console.log("no existe");
}
console.log(index);
console.log(frutase);

console.log("========= Ejercicios 2  Inserta ===============");

//Inserta "kiwi" y "sandía" después de "pera" sin eliminar nada.
let frutas4 = ["manzana", "pera", "naranja"];
console.log("original", frutas4);

frutas4.splice(2, 0, "kiwi", "sandia");
console.log("Solucion", frutas4);

console.log("========= Ejercicios 3 Reemplaza  ===============");

//Reemplaza "pera" por "banana" en el array.
let frutas5 = ["manzana", "pera", "naranja"];
console.log("original", frutas5);

frutas5.splice(1, 1, "banana");
console.log("solucion2", frutas5);

console.log("============= Ejercicios 4 Eliminar ====================");

//Elimina "banana", "kiwi" y "uva" del array.
let frutas6 = ["manzana", "banana", "kiwi", "uva", "naranja"];
console.log("original", frutas6);

frutas6.splice(1, 3);
console.log("final", frutas6);

console.log("============= Ejercicios 5 vaciar ====================");

//Elimina todos los elementos del array sin redefinirlo.
let numeros4 = [1, 2, 3, 4, 5];
console.log("origen", numeros4);

numeros4.splice(0, numeros4.length);
console.log("final", numeros4);
