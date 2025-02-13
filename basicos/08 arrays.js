//Arrays

//Declaracion

let miArray = [];
let miArray1 = new Array();

console.log(miArray);
console.log(miArray1);

//Inicializacion

miArray = [3, 4, 5];
miArray1 = [3, 4, 5];

console.log(miArray);
console.log(miArray1);

//Metodos de array

//push
miArray.push("Martinez"); //Agrega al final
miArray.push("Dta");
console.log(miArray);

//pop
miArray.pop(); //elimina el ultimo
console.log(miArray);

//shift y unshift}
miArray.unshift("Redme"); //Agrega un valor al inicio
miArray.unshift("Motorola"); //Agrega un valor al inicio
console.log(miArray);

miArray.shift(); //borra el primer elemnto
console.log(miArray);

//Length
console.log(miArray.length); //longitud de un array

//limpiar
miArray = [];
miArray.length = 0;
console.log(miArray);

//slice
personas = ["pedro", "juan", "luis", "david", "santiago"];
console.log(personas);

personasNew = personas.slice(3, 4); //Devuelve de la posicion indicada hasta el 4 pero no la incluye
console.log(personasNew);
