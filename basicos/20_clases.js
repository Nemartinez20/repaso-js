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

//Clases con valores por defecto

class Persona1 {
  constructor(name = "Lorena", lastname = "Camargo", ege = 34) {
    this.name = name;
    this.lastname = lastname;
    this.ege = ege;
  }
}

//No se le pasa árametros a la clase ya que los tiene por defecto
let Maria = new Persona1();
console.log(Maria);
