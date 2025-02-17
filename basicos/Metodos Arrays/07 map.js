const lettras = ["a", "b", "c", "d"];

// con for
const newLetters = [];
for (let i = 0; i < lettras.length; i++) {
  let elemnto = lettras[i];
  newLetters.push(elemnto);
}
console.log(newLetters);

//con map

let inicio = lettras.map((el) => {
  return el;
});

console.log(inicio);
