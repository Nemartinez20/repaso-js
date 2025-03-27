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

// ============================  EJRCICIO 2 =================
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

// ============================  EJRCICIO 3 =================

//Acceder a las propiedades de la clase
console.log(Maria.ege); // 34
console.log(Maria["lastname"]); // Camargo

// ============================  CLASES CON FUNCIONES  =================

//1. definir la clse con su constructor y su metodos
class Persona2 {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  //funcion o metodo
  saludar() {
    console.log(`Hola como estan me llamo ${this.name}`);
  }
}

//Se instancia la persona
let rtaPersona2 = new Persona2("Pedro", "Morales", 25);

//Se ejecuta el metodo
rtaPersona2.saludar();

// ============================  CLASES CON PROPS PRIVADAS  =================

//1. definir la clse con su constructor y su metodos
class Persona3Private {
  //Para poner las prpiedades privadas se coloca un # antes
  #bank;
  constructor(name, lastname, age, bank) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.#bank = bank;
  }

  //funcion o metodo
  pago() {
    console.log(`El numero de tu cuenta es: ${this.#bank}`);
  }
}

let personPriv = new Persona2("Pedro", "Morales", 25, "389292893#");
console.log(personPriv.pago); //No se puede acceder , ya que esta privada
