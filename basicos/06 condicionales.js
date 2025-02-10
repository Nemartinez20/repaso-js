//Condicionales

//if else if

let edad = 70;

//if
if (edad > 18) {
  console.log("eres mayor de edad");
}

// if-else

if (edad < 18) {
  console.log("eres menor de edad  - nene");
} else {
  console.log("eres mayor de edad");
}

// if  else-if  else

if (edad < 18) {
  console.log("eres menor de edad y no vas a prestar servicio militar");
} else if (edad > 50) {
  console.log("eres reservista mlitar");
} else {
  console.log("puedes prestar servicio militar");
}

//Operador ternario

let age = 75;

age ? console.log("tienes 25") : console.log("tienes otra edad");

// switch

let day = 3;
let diaName;

switch (day) {
  case 1:
    diaName = "lunes";
    break;
  case 2:
    diaName = " Martes";
    break;
  case 3:
    diaName = "Miercoles";
    break;

  case 4:
    diaName = "Jueves";
    break;

  case 5:
    diaName = "Viernes";
    break;
  case 6:
    diaName = "Sabado";
    break;
  case 7:
    diaName = "Domingo";
    break;

  default:
    diaName = "Noexiste tal dia";
}

console.log(diaName);
