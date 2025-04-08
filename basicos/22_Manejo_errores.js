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
