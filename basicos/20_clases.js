// Clases

//1. crear la clase
class Persona {
  //2. crear el constructor
  constructor(name, edad, correo) {
    this.name = name;
    this.edad = edad;
    this.correo = correo;
  }
}

//3. Instanciar

let juan = new Persona("Juan", 24, "juan@correo.com");
console.log(juan);
