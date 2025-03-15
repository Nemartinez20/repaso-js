//Objetos

// Sintaxis

let persona = {
  nombre: "juan",
  edad: 25,
};

// Acceso a propiedades

// Notación punto
console.log(persona.nombre);

// Notación de corchetes
console.log(persona["nombre"]);

// Modificación de propiedades
persona.nombre = "Andres";
console.log(persona);

console.log(typeof persona.edad);
//cambiando type de datos
persona.edad = "37";
console.log(persona.edad);
console.log(typeof persona.edad);

//eliminar propiedades
delete persona.edad;
console.log(persona);

//Agregar propiedades
persona.email = "correo@correo.com";
console.log(persona);

// Añadir metodos a los objetos
let persona2 = {
  nombre: "juan",
  correo: "correo1@correo.com",
  sauldar: function () {
    console.log("hola como estas");
  },
  job: {
    nombre: "programador React",
    experiencia: 15,
    work: function () {
      console.log("la perona trabaja en programacion web");
    },
  },
};

console.log(persona2);
console.log(persona2.job.nombre);

//iteracion

persona4 = {
  nombre: "perdro",
  edad: 45,
  email: "correo@correo.com",
  sauladr: function () {
    console.log(
      `Hola mi nombre es ${this.nombre}  soy programador de React, mi email es ${this.email}`
    );
  },
};

persona4.sauladr();

persona4.apellido = "Moreno";

console.log(persona4);
