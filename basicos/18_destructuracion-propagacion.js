let array = [1, 2, 4, 5, 8, 2];
positionUno = array[1];
console.log(positionUno);

let persona = {
  nombre: "juan",
  appelido: "Moreno",
  edad: 30,
};

const nombrep = persona.nombre;
console.log(nombrep);

console.log("Destructuracion....");
//Destructuracion

//arrays
const [uno, dos, tres, cuatro] = array;
console.log(uno);

//Objetos
const { nombre } = persona;
console.log(nombre);
