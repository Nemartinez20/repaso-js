//Estructuras Avanzadas

// Array avanzados

//Metodos  funcionales

// - Foreach

let array1 = [1, 4, 5, 7, 2, 3, 9, 8];

//
//
console.log("Foreach ---------------------------------------- ");
array1.forEach((index, Element) => {
  console.log(index, Element);
});
//map
console.log("map ---------------------------------------- ");
let array2 = array1.map((Element) => Element * 2);
console.log(array2);

//Filter
console.log("Filter ---------------------------------------- ");

let pares = array1.filter((Element) => Element % 2 === 0);
console.log(pares);

//Reduce  - retorna todo a un unio valor en este caso
//Suma el valor resultado o valor previo  mas el actual e inicia desde cero

console.log("Reduce ----------------------------------------");
let array3 = array1.reduce((resultado, actual) => resultado + actual, 0);
console.log(array3);

// -Manipulacion
console.log("----------------------------------------");
console.log("----------------------------------------");

//Flat - aplanar array que esta dentro de los arrays
console.log("Flat ----------------------------------------");
let multipleArrays = [1, [2, [3, [4]]]];
console.log(multipleArrays);
let nuevoArray = multipleArrays.flat(2); //saca segun la poscicion
console.log(nuevoArray);

//FlatMap - aplanar array que esta dentro de los arrays
console.log("FlatMap ----------------------------------------");

let Frases = ["Hola mundo", "como vas"];
let palabras = Frases.flatMap((frase) => frase.split(" "));
console.log(palabras);

let texto = "hola mundo cmo  la vida loca";
console.log(texto.split(" ").slice(0, 2).join(" "));

// ************  Ordenacion ************************

let numeros = [2, 5, 6, 7, 3, 2, 9, 10, 23, 16];

console.log("Sort Ordenar ----------------------------------------");
let ordenados = numeros.sort((a, b) => a - b);
console.log(ordenados);

//reverse  - muta el array pero al reves
console.log("Reverse ----------------------------------------");
console.log(ordenados.reverse());

// ************  Busqueda ************************
console.log("----------------------------------------");
console.log("----------------------------------------");

//includes
console.log("includes ----------------------------------------");
let buscar = [3, 40, 2, 5, 4, 7, 8, 9, 10, 21, 3, 2, 5];
console.log(buscar.includes(9));

//find - devuelve el primer elemento que cumpla con la condicion
console.log("Find ----------------------------------------");
let nuevoBuscar = buscar.find((Element) => Element % 2 === 0);
console.log(nuevoBuscar);

//findindex - devuelve el index del  elemento que cumpla con la condicion
console.log("FindIndex ----------------------------------------");
let nuevoBuscar2 = buscar.findIndex((Element) => Element % 2 === 0);
console.log(nuevoBuscar2);

console.log("Set ----------------------------------------");
let rta = buscar.filter((el, index) => buscar.indexOf(el) === index);
let ordernado = rta.sort((a, b) => a - b);
console.log(buscar);
console.log(ordernado);

//Elimar duplicados

//Set

console.log("Set ----------------------------------------");
let muchos = [3, 40, 2, 5, 4, 7, 8, 9, 10, 21, 3, 2, 5, 1, 1, 1, 2];
let unicos = [...new Set(muchos)];
console.log(unicos);
