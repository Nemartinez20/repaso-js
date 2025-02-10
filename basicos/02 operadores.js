let a = 5;
let b = 10;

a--; //decremento
console.log(a);

a++; //decremento
console.log(a);

console.log(a + b); //suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicacion
console.log(a / b); //division
console.log(a % b); //modulo

// Operadores de asignacion

let mi_variable = 2;
mi_variable += 2; //suma con asignacion
mi_variable -= 2; //resta con asignacion
mi_variable *= 2; //multiplicaion con asignacion
mi_variable /= 2; //Division con asignacion
mi_variable %= 2; //Moudulo con asignacion
console.log(mi_variable);

//comparacion

console.log(a > b); //Mayor
console.log(a < b); //Menor
console.log(a >= b); //Mayor igual
console.log(a <= b); //Menor igual
console.log(a == b); //Igualdad
console.log(a == 7); //Igualdad
console.log(a == "5"); //Igualdad
console.log(a === a); //Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(0 == false);
console.log(0 == true);
console.log(1 == true);
console.log(1 == false);
console.log("comillas");
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "");
console.log("undefined");
console.log(undefined == null);
console.log(undefined === null);

//Operadores logicos
//and
console.log("conparadores logicos");
console.log("conparadores logicos AND");
console.log(5 > 10 && 6 > 10); //las dos tienen que ser verdaderas
console.log(5 < 10 && 6 < 10); //las dos tienen que ser verdaderas
console.log(5 < 10 && 15 > 20);

console.log("conparadores logicos OR");
//or
console.log(11 > 10 || 6 > 10); // si alguna se cumple
console.log(1 > 10 || 7 > 9);

console.log(!true);
console.log(!false);

//Operador ternario
console.log("operador ternario");

let estaLloviendo = false;

estaLloviendo
  ? console.log("si esta lloviendo")
  : console.log(" no esta lloviendo");
