function sum(num1, num2) {
  return num1 + num2;
}

//funcion callback

function calcular(nume1, nume2, callback) {
  return callback(nume1, nume2);
}

console.log(calcular(5, 5, sum));

//
url = "https://rickandmortyapi.com/api/character";
fetch(url)
  .then((resp) => resp.json())
  .then((result) => console.log(result));

const consultarApi = async () => {
  const respuessta = await fetch(url);
  const resultado = await respuessta.json();
  console.log(resultado);
};

consultarApi();
