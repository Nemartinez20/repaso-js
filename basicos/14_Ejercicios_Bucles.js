//

//
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("Ejericicio 1 =======================");
for (i = 0; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("Ejericicio 2 ========================");

let suma = 0;
for (i = 0; i <= 100; i++) {
  suma = suma + i;
  //   console.log(i);
}
console.log("la suma es", suma);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("Ejericio 3 ========================");

for (i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Es numero par", i);
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("Ejericio 4 ========================");

const nombres = ["juan", "pedro", "Ariosto", "Cristian", "Bernabe"];

for (i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("Ejericio 5 ========================");

const cadena = "mi perro se comio la tera, profesora";
let suma1 = 0;
for (i = 0; i < cadena.length; i++) {
  // console.log("la tares", cadena[i]);

  if (
    cadena[i] == "a" ||
    cadena[i] == "e" ||
    cadena[i] == "i" ||
    cadena[i] == "o" ||
    cadena[i] == "u"
  ) {
    console.log("la tares", cadena[i]);

    console.log("uno");
    console.log((suma1 = suma1 + 1));
    // return (suma1 = suma1 + 1);
  }
}
// console.log(cadena.includes("a"));

console.log(suma1);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("Ejericio 6 ========================");

const multiplicar = [2, 3, 4, 5, 6, 7, 8];

let resulMult = 1;
for (i = 0; i < multiplicar.length; i++) {
  resulMult = resulMult * multiplicar[i];
}

console.log("multiplicacion", resulMult);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Ejericio 7 ========================");

for (i = 1; i <= 10; i++) {
  mult = 4 * i;
  console.log(`4 * ${i} =  ${mult}`);
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("Ejericio 8 ========================");

let cadenaTexto = "La vida es un carnaval";
let cadenaNueva = "";
for (let i = cadenaTexto.length - 1; i >= 0; i--) {
  // console.log(cadenaTexto[i]);
  cadenaNueva = cadenaNueva + cadenaTexto[i];
}

console.log(cadenaNueva);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("Ejericio 9 ========================");

let sumaFib = 0;
let inicial = 1;

for (let i = 0; i <= 3; i++) {
  console.log(sumaFib);
  let siguiente = sumaFib + inicial;
  console.log("inicial 0 + 1: ", siguiente);
  //cambiamos los valores
  sumaFib = inicial;
  console.log("otra", sumaFib);

  inicial = siguiente;

  console.log("nuevamente ", siguiente);

  //
}
console.log(sumaFib);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("Ejericio 10 ========================");

const miArrayTwo = [2, 3, 4, 5, 6, 9, 12, 13, 16, 15, 18, 12, 32];
let nuevo = [];

for (let i = 0; i < miArrayTwo.length; i++) {
  if (miArrayTwo[i] > 10) {
    console.log(miArrayTwo[i]);
    nuevo.push(miArrayTwo[i]);
  }
}

console.log(nuevo);
