//
//
// //reduce suma
let numeros = [2, 2, 4, 5, 6, 7, 8, 9, 3];
// con for

suma = 0;
for (let i = 0; i < numeros.length; i++) {
  elemento = numeros[i];
  suma = suma + elemento;
}

console.log(suma);
//cn reduce
let otro = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(otro);

//Suma
let miarray = [2, 3, 4, 5, 6, 7];
let resultado = miarray.reduce((acum, item) => {
  console.log(`el acumulador es ${acum} y este es el item ${item},  `);
  return (acum = acum + item);
}, 0);

console.log(resultado);

// sumar el precio de todos los objetos
let elementos = [
  { nombre: "Espada de fuego", precio: 1500, elemento: "Fuego" },
  { nombre: "Arco de hielo", precio: 1200, elemento: "Hielo" },
  { nombre: "Martillo de tierra", precio: 1800, elemento: "Tierra" },
  { nombre: "Daga de viento", precio: 900, elemento: "Viento" },
  { nombre: "Báculo de rayo", precio: 2000, elemento: "Rayo" },
];

let precioTotal = elementos.reduce((acumulador, item) => {
  return (acumulador = acumulador + item.precio);
}, 0);

console.log(precioTotal);

// sumar cuantas veces aparece un nivel , ej: bajo = 2

let people = [
  { nombre: "Guerrero", nivel: "Alto" },
  { nombre: "Aprendiz", nivel: "Bajo" },
  { nombre: "Mago", nivel: "Intermedio" },
  { nombre: "Arquero", nivel: "Alto" },
  { nombre: "Ladrón", nivel: "Bajo" },
];

let rta = people
  .map((el) => el.nivel)
  .reduce((acum, elemento, index) => {
    console.log(`Iteración ${index + 1}:`);
    console.log("Antes:", JSON.stringify(acum));

    if (acum[elemento]) {
      acum[elemento] = acum[elemento] + 1;
    } else {
      acum[elemento] = 1;
    }
    console.log("Después:", JSON.stringify(acum));
    console.log("-------------------");

    return acum;
  }, {});

console.log(rta);

// convetir esa matriz en un array de una sola dimension

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let plano = matriz.reduce((acum, elemento) => {
  return acum.concat(elemento);
});

console.log(plano);

// ARRAY

const conjunto = [2, 2, 3, 3, 4, 5, 1, 5];

let resConjunto = conjunto.reduce((acum, elemento) => {
  if (acum[elemento]) {
    acum[elemento] = acum[elemento] + 1;
  } else {
    acum[elemento] = 1;
  }
  return acum;
}, {});

console.log(resConjunto);
