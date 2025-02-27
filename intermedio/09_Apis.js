// Manejo de Apis

// -Apis REST(HTTP- URLS + JSON)

//========  Metodos HTTP
//- GET
//- POST
//- PUT
//- DELETE

// ====== CODIGOS DE RESPUESTA

// -200 OK

// Consultando Api JSON-PLACEHOLDER
url = "https://jsonplaceholder.typicode.com/albums/1/photos";
fetch(url)
  .then((respuesta) => console.log(respuesta))
  //   .then((resultado) => console.log(resultado))
  .catch((error) => {
    console.log(error);
  });
