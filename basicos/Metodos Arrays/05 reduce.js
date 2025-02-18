//
//
// //reduce
let numeros = [2, 2, 4, 5, 6, 7, 8, 9, 3];

let otro = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(otro);

let miarray = [2, 3, 4, 5, 6, 7];

let resultado = miarray.reduce((acum, item) => {
  console.log(`el acumulador es ${acum} y este es el item ${item},  `);
  return (acum = acum + item);
}, 0);

console.log(resultado);

//

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

//

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

//

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let plano = matriz.reduce((acum, elemento) => {
  return acum.concat(elemento);
});

console.log(plano);
