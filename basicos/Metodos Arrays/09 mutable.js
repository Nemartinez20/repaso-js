/*
  ==================  Mutabilidad ================================
*/

//Array que muta

const arrayUno = [1, 2, 3, 4, 5];
console.log("Original - arrayUno", arrayUno);
let arrayDos = arrayUno;

arrayDos[0] = "Juan";
console.log("arrayDos", arrayDos);
console.log("arrayUno", arrayUno);

//  Objeto que muta
const juan = { nombre: "Juan", apellido: "Moreno" };
console.log("Original - Juan", juan);

let diego = juan;

diego.nombre = "Diego";

console.log("Diego", diego);
console.log("Juan", juan);

/*
  ==================  INMutabilidad ================================
*/

console.log("Inmutaabilidad==============");
//Array que no muta

const array1 = [1, 2, 3, 4, 5];
console.log("Original - array1", array1);
let array2 = [...arrayUno];

array2[0] = "Juan";
console.log("array2", array2);
console.log("array1", array1);

//  Objeto que no muta
const juan1 = { nombre: "Juan", apellido: "Moreno" };
console.log("Original - Juan", juan1);
let diego1 = { ...juan1 };

diego1.nombre = "Diego";

console.log("Diego", diego1);
console.log("Juan", juan1);

// array no muta gracias al spred operator

const arrayPeople = [
  { nombre: "Carlos", apellido: "Gómez", edad: 30 },
  { nombre: "Ana", apellido: "Martínez", edad: 25 },
  { nombre: "Luis", apellido: "Fernández", edad: 40 },
  { nombre: "Elena", apellido: "Rodríguez", edad: 35 },
  { nombre: "Pedro", apellido: "López", edad: 28 },
];

let newPeople = arrayPeople.map((elemento) => {
  hoy = new Date();

  return {
    ...elemento,
    year: hoy.getFullYear() - elemento.edad,
  };
});

console.log("new", newPeople);
console.log("Original", arrayPeople);

console.log("ejercicio de inmutabilidad");
// array no muta gracias al spred operator

const numeros = [1, 2, 3, 4, 5];

const format = {
  elemento: 0,
  index: 0,
  type: "number",
};

let newNumbers = numeros.map((index, elemento) => {
  const newFormat = { ...format };
  newFormat.elemento = elemento;
  newFormat.index = index;

  return newFormat;
});

console.log("new  newNumbers", newNumbers);
