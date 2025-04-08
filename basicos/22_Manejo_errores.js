//Manejo de errorres
console.log("desde errores...");

let person;

//Captura de errores
//try catch
try {
  //Codigo que intenta ejecutar
  console.log(person.name);
  console.log("Finaliza la ejecucion sin errores");
} catch (error) {
  // Bloque de errores
  console.log("Se ha producido un error");
}

//Cpturar el mensaje del error

try {
  //Codigo que intenta ejecutar
  console.log(person.name);
  console.log("Finaliza la ejecucion sin errores");
} catch (error) {
  // Bloque de errores
  console.log(error.message);
  console.log("Se ha producido un error");
}

//con finally
try {
  //Codigo que intenta ejecutar
  console.log(person.name);
  console.log("Finaliza la ejecucion sin errores");
} catch (error) {
  // Bloque de errores
  console.log("Se ha producido un error");
} finally {
  //se ejecuta siempre asi se cumpla el try o el catch
  console.log("siempre se ejecuta");
}
