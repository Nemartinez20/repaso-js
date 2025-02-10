//
//
// // 1. Concatena dos cadenas de texto
let fisrtCadena = "la leyenda de la macha";
let secondCadena = "la danza de fuego";

let resultadoContatenar =
  fisrtCadena + " y " + secondCadena + " son canciones de mago de oz";
console.log(resultadoContatenar);

// 2. Muestra la longitud de una cadena de texto

console.log(resultadoContatenar.length);

// 3. Muestra el primer y último carácter de un string

console.log(resultadoContatenar[0]);
let ultimo = resultadoContatenar.length - 1;
// console.log(ultimo);
console.log(resultadoContatenar[ultimo]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(resultadoContatenar.toUpperCase()); //Mayusculas
console.log(resultadoContatenar.toLocaleLowerCase()); //minusculas

// 5. Crea una cadena de texto en varias líneas
let cadena = `
 esta es una cadena
 de texto 
 en varias
 lineas
 `;

console.log(cadena);
// 6. Interpola el valor de una variable en un string

let variable = 4;
console.log(typeof variable);
let cambio = String(variable);
console.log(typeof cambio);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(resultadoContatenar.replace(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(resultadoContatenar.includes("mago"));

// 9. Comprueba si dos strings son iguales

let primero = "hola mundo";
let segundo = "Programando en js";

console.log(primero === segundo);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(primero.length == segundo.length);
