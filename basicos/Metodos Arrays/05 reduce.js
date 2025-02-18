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
