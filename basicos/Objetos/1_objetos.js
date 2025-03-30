//Los objetos

const persona = {
  nombre: "Juan",
  lastname: "Morales",
  edad: 23,
  email: "gato89@correo.com",
};

//Acceder a las propiedades de los objetos
console.log(persona["nombre"]); // --> acceder a las propiedades
console.log(persona.nombre); //--< acceder con la notacion de punto

console.log(persona);

//editar
persona.nombre = "Lina";
console.log(persona);
