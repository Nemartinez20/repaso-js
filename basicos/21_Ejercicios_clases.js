// 1. Crea una clase que reciba dos propiedades
class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class Persona1 {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  saludar() {
    console.log(`Hola como estan me llamo ${this.name}`);
  }
}
// 3. Muestra los valores de las propiedades e invoca a la función

let juan = new Persona1("Juan", "Manuel");
console.log(juan);
juan.saludar();

// 4. Añade un método estático a la primera clase
class Persona3 {
  constructor(name, lastname, email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  }
}

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

class Persona4 {
  constructor(name, lastname, email, age) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
  }

  obnerNombre() {
    return console.log(`tu nombre: ${this.name}`);
  }
}

juan = new Persona4("Juan David", "Lorenzo", "correo@correo.com", 24);

juan.obnerNombre();
// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia
