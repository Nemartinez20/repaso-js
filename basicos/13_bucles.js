// bucles
let miarrray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miarrray.length; i++) {
  console.log(i);
}

//Buscar numero pares
for (let i = 0; i < miarrray.length; i++) {
  if (miarrray[i] % 2 == 0) {
    console.log("numero pas", i);
  }
}

//Bucle while
let iterador = 0;

while (iterador < 5) {
  console.log("anexio", iterador);
  iterador++;
}

// do while
let i = 0;
do {
  console.log("con do while", i);
  i++;
} while (i < 6);

//For of

const numeros = [2, 3, 4, 4, 6, 7, 8];

for (let valor of numeros) {
  console.log("con for-of", valor);
}

// Break continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  } else if (i === 7) {
    break;
  }
  console.log("continue - break : ", i);
}
