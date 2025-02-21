// ==============  map ============================

//Declaracion
let miMap = new Map();
console.log(miMap);

//Inicializacion

miMap = new Map([
  ["Nombre", "juan"],
  ["Apellido", "Cardona"],
  ["Sexo", "Masculino"],
  ["color", "Moreno"],
  ["Edad", 30],
]);

console.log(miMap); // Map(3) { 'Nombre:' => 'juan', 'Apellido:' => 'Cardona', 'Edad:' => 30 }

//Metodos

//Agregar  Set
miMap.set("pregado", true);
console.log(miMap); // Map(3) { 'Nombre:' => 'juan', 'Apellido:' => 'Cardona', 'Edad:' => 30 ,'pregado:' => True }

/*
si la clave existe lo actualiza, si no existe lo crea
No puede haber repetidos en clave

*/

//Get

console.log(miMap.get("name")); //undefined
console.log(miMap.get("Edad")); //True

//has
console.log(miMap.has("Edad")); //True
console.log(miMap.has("name")); //False

//delete
miMap.delete("Edad");
console.log(miMap);

//Keys
console.log(miMap.keys());
//values
console.log(miMap.values());
//entries
console.log(miMap.entries());
//Size
console.log(miMap.size);

//Vacir
//Clear
miMap.clear();
console.log(miMap);
