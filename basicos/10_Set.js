// ========================== los Sets  =======================================

let miSet = new Set();
let miSet1 = new Set(["Nestor", "Martinez", "iterador", "correo@correo.com"]);

console.log(miSet);
console.log(miSet1);

//=========================== Metodos Comunes ======================

// add y delete

miSet1.add("types");
miSet1.delete("types");

if (miSet1.delete("iterador")) {
  console.log("Si se borro");
} else {
  console.log("no se borro");
}

console.log(miSet1);

//Has  si existe un elemento

console.log(miSet1.has("comodin")); //False
console.log(miSet1.has("Nestor")); //True

//Longitud

console.log(miSet1.size); //3

//Convertir set a array

let miArray = Array.from(miSet1);
console.log(miArray); // [ 'Nestor', 'Martinez', 'correo@correo.com' ]

//Convertir de array a set
let miSet2 = new Set(miArray);
console.log(miSet2); // Set(3) { 'Nestor', 'Martinez', 'correo@correo.com' }

//Ojo cuidado

// =============  Diferencia de los Sets y de los array -- no permite DUPLICADOS --

//No agrega Martinez porque ya esta no permite duplicados
console.log("mi Set", miSet1.add("Martinez"));
