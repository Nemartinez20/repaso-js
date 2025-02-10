// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "pedro";
let password = "12345";

if (usuario && password) {
  console.log("iniciar sesion");
} else {
  console.log("fuera dela sesion");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -20;

if (numero < 0) {
  console.log("numero es negativo");
} else {
  console.log("numero es positivo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadVoto = 10;
if (edadVoto < 18) {
  let falta = 18 - edadVoto;
  console.log(
    "no puede votar, porque te faltan",
    falta + " años para ser mayor de edad"
  );
} else {
  console.log("si puede votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let mayor = 18;

mayor >= 18 ? console.log(" eres adulto") : console.log(" eres menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Junio";

if (
  mes === "Enero" ||
  mes === "Febrero" ||
  mes === "Marzo" ||
  mes === "Abril"
) {
  console.log("Estas en la estacion de verano");
} else if (
  mes === "Mayo" ||
  mes === "Junio" ||
  mes === "Julio" ||
  mes === "Agosto"
) {
  console.log("Estas en la estacion de Invierno");
} else {
  console.log("Estas en la estacion de Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Ruso";
let saludo;

switch (idioma) {
  case "Espanol":
    saludo = "Hola como estas";
    break;
  case "Ingles":
    saludo = "Hello world";
    break;
  case "Ruso":
    saludo = "Hi Priviet";
    break;
  case "Frances":
    saludo = "vonyur";
    break;
}
console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
