// Funciones --> bloque de codigo para llamar despues

//Tradicionales
function miFuncionSaludar() {
  console.log("hola pepito");
}

miFuncionSaludar();

//Arrow functions
const saludar = () => {
  console.log("desde la funcion, arrow function");
};

saludar();
saludar();
saludar();

// Funcioes con parametros
const saludarPeople = (nombre, apellido) => {
  console.log(`hola como estas ${nombre} ${apellido}`);
};

saludarPeople("Nestor Arley", "Mou Romero");

//Ejercicios
const sumar = (a = 0, b = 0) => {
  console.log(a + b);
};

sumar(10, 30);

// funciones donde entra el terino Scope

function externa() {
  console.log("desde esterna");
  function interna() {
    console.log("desde la funcion interna");
  }

  interna(); //Aui si se puede llamar ya que esta dentro de la funcion externa
}

externa();
// interna(); // esta fuera del Scope

//Funciones de Orden superior --> una funcion que llama a otra
function recibeFunciones(funcio, parametro) {
  funcio(parametro);
}

recibeFunciones(sumar, 10, 40);

//ForEach

const array = [2, 3, 4, 5, 6, 7, 8, 9];

for (mio of array) {
  console.log("con for - of: ", mio);
}

array.forEach((el) => {
  console.log("con el ForEach: ", el);
});
