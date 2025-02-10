let nombre = "Nestor";

//concatenacion
let saludar = "hola, " + nombre + " como estas";

console.log(saludar);
console.log(typeof saludar);

//longitud
console.log(saludar.length);

//Acceso a caracteres
console.log(saludar[10]);

//metodos

console.log(saludar.toLowerCase()); //Minusculas
console.log(saludar.toUpperCase()); //Minusculas
console.log(saludar.indexOf("como")); //indice
console.log(saludar.indexOf("estas")); //indice
console.log(saludar.indexOf("Nestor")); //indice
console.log(saludar.includes("como")); // incluye
console.log(saludar.includes("pedro"));

console.log(saludar.slice(0, 10)); // obtener

console.log(saludar.split(" ", 3).join(" ")); //separar y convertir en arreglo

console.log(saludar.replace("Nestor", "Arley")); //Remplzar

// Template literals (plantillas literales)

// Strings en varias líneas

let mensaje = `hola esto es un mensaje dentro de un plantilla literal
de varios renglones
`;

console.log(mensaje);

//con variables
let miMsj = `hola esto es otro mensaje creado por: ${nombre}`;

console.log(miMsj);
