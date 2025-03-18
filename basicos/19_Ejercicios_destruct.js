// 1. Usa desestructuración para extraer los dos primeros elementos de un array

const miArray = [1, 2, 3, 4, 5];

const [uno, dos] = miArray;
console.log(uno, dos);
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const frutas = ["manzana", "peras", "bananos"];
const [uno1, dos1, tres = "lulo"] = frutas;
console.log(uno1, dos1, tres);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

persona = {
  nombre: "juan",
  eda: 24,
};

const { nombre, eda } = persona;
console.log(nombre, eda);
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación
