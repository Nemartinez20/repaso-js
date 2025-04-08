// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

console.log("Ejercicio 1 ================================");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((result) => console.log(result));
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/todos2")
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
console.log("desarrollo deejrcicio 3de apis");

async function consultarApi() {
  const repuesta = await fetch("https://jsonplaceholder.typicode.com/todos2");
  const resultado = await repuesta.json();
  console.log(resultado);
}

consultarApi();
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
