function sum(num1, num2) {
  return num1 + num2;
}

//funcion callback

function calcular(nume1, nume2, callback) {
  return callback(nume1, nume2);
}

console.log(calcular(5, 5, sum));
