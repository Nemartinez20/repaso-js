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

//Array con valores por defecto
const [uno1 = 0, dos2 = 0, tres2 = 0, cu0 = 0, cinco = 0, seis = 0, siete = 0] =
  array;
console.log(uno1);
console.log(siete);

//Objetos
const { nombre } = persona;
console.log(nombre);
