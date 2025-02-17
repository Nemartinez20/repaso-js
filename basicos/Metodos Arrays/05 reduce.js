//
//
// //reduce
let numeros = [2, 2, 4, 5, 6, 7, 8, 9, 3];

let otro = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(otro);

let a = 1;

for (i = a; i < 10; i++) {
  a = a * i;
  console.log(a, i);
  // console.log(i);
}
