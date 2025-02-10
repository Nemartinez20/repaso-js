// let suma = a + b;
// let resta = a - b;
// let multi = a * b;
// let division = a / b;

let sumaAsignacion = 10; //suma operador de asignacion

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(14 > 10);
console.log(4 < 10);
console.log(4 === 4);
console.log(4 == "4");
console.log(14 >= 10);
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(4 > 10);
console.log(14 < 10);
console.log(4 === 10);
console.log(4 == 10);
console.log(4 >= 10);

// 5. Utiliza el operador lógico and
console.log(5 < 10 && 5 < 3);

// 6. Utiliza el operador lógico or
console.log(5 < 10 || 5 < 3);

// 7. Combina ambos operadores lógicos

console.log((5 < 10 && 6 < 10) || 9 > 5);

// 8. Añade alguna negación
console.log("negacion", !false);

// 9. Utiliza el operador ternario
let aprobado = true;
aprobado ? console.log("si paos el año") : console.log("no paso el año");

// 10. Combina operadores aritméticos, de comparáción y lógicas
