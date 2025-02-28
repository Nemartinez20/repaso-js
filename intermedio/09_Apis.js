// Manejo de Apis

// -Apis REST(HTTP- URLS + JSON)

//========  Metodos HTTP
//- GET
//- POST
//- PUT
//- DELETE

// ====== CODIGOS DE RESPUESTA

// -200 OK
// Apis con GET

// Consultando Api JSON-PLACEHOLDER
url = "https://jsonplaceholder.typicode.com/albums/1/photos";
fetch(url)
  .then((respuesta) => {
    // Transforma la respuesta a JSON
    return respuesta.json();
  })
  .then((resultado) => {
    // Procesa los datos
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

//Con Async Await
const consultarApi = async () => {
  try {
    url2 = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const respuesta2 = await fetch(url2);
    const resultado = await respuesta2.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

consultarApi();

// Apis con POST
