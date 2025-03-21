// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

console.log("===== Ejercicio 1 de funciones ======");

function sumar(a, b) {
  console.log(a + b);
}
sumar(10, 10);
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("===== Ejercicio 2 de funciones ======");

const miArray = [2, 3, 34, 4, 5, 8, 19];
function maximo(array) {
  console.log(Math.max(...array));
}

maximo(miArray);

// con bucles
const miArray1 = [2, 3, 34, 4, 5, 8, 19];
let maximo1 = miArray1[0];

for (i = 0; i < miArray.length; i++) {
  if (miArray[i] > maximo1) {
    maximo1 = miArray[i];
  }
}

console.log(maximo1);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("===== Ejercicio 3 de funciones ======");

let vocales = 0;
function contadorVocales(texto) {
  for (i = 0; i < texto.length; i++) {
    console.log(texto[i]);

    if (texto[i] === "a") {
      vocales = vocales + 1;
    }
  }
}

contadorVocales("la vaca cabrona");
console.log(vocales);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("===== Ejercicio 4 de funciones ======");

function convertirMayus(texto) {
  console.log(texto.toUpperCase());
}
convertirMayus("la vida es un carnaval bonito");

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("===== Ejercicio 5 de funciones ======");

function numeroPrimo(numero) {
  if (numero <= 0 && numero % numero === 0) {
    console.log("el numero: ", numero, "es primo");
  } else {
    console.log("no es primo");
  }
}

numeroPrimo(5);
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("===== Ejercicio 6 de funciones ======");

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("===== Ejercicio 7 de funciones ======");

function sumarPares(arrayMio) {
  sumaEj7 = 0;
  for (i = 0; i < arrayMio.length; i++) {
    if (arrayMio[i] % 2 === 0) {
      sumaEj7 = sumaEj7 + arrayMio[i];
    }
  }
  console.log(sumaEj7);
}

const miArraycito = [2, 23, 4, 5, 7, 8, 9, 12, 14, 15, 16, 2, 10];

sumarPares(miArraycito);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("===== Ejercicio 8 de funciones ======");

function newArray(otroArray) {
  resultadoEj8 = 0;
  for (let i = 0; i < otroArray.length; i++) {
    console.log(otroArray[i] * otroArray[i]);
  }
}

newArray(miArraycito);
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("===== Ejercicio 9 de funciones ======");

function cadenaOrdenInverso(cadena) {
  console.log(cadena.split(" ").reverse().join(""));
}

cadenaUno = "Lola lolita lang en España";

cadenaOrdenInverso(cadenaUno);
// 10. Crea una función que calcule el factorial de un número dado
console.log("===== Ejercicio 10 de funciones ======");

function numeroFactorial(numeroFact) {
  console.log("numero factorial de ", numeroFact);
}

numeroFactorial(8);
