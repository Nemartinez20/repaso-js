// 1. Crea un objeto con 3 propiedades
persona = {
  nombre: "juan",
  apellido: "Moreno",
  edad: 34,
};

// 2. Accede y muestra su valor

console.log(persona);

// 3. Agrega una nueva propiedad

persona.email = "correo@correo.com";

// 4. Elimina una de las 3 primeras propiedades

delete persona.apellido;
console.log(persona);

// 5. Agrega una función e invócala

persona.saludar = function () {
  console.log(`Hola como estas ${this.persona.nombre}`);
};

persona.saludar();
// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales
