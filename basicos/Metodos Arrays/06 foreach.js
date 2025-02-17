let fruits = ["Manzana", "Mandariana", "lulo", "Pera"];

fruits.forEach((Element, index, fruits) => {
  console.log(Element, index, fruits);
});

fruits.forEach((el, index) => {
  console.log(`el elemento es: ${el}, y su indice es ${index}`);
});

fruits.map((el, index, array) => {
  array[1] = "Mango";
  console.log(el);
});

let numerosArray = [2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 151, 6, 12, 18];
let pares1 = [];
let impares = [];
numerosArray.forEach((el) => {
  if (el % 2 === 0) {
    pares1.push(el);
  } else {
    impares.push(el);
  }
});

console.log(pares1);
console.log(impares);

//Sumar con foreach
let suma1 = 0;
numerosArray.forEach((el) => {
  suma1 += el;
});
console.log(suma1);
