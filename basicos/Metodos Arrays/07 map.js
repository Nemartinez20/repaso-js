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

console.log("================================================");

const ordenes = [
  {
    cliente: "juan",
    total: 60,
    otro: true,
  },
  {
    cliente: "pedro",
    total: 100,
    otro: true,
  },
  {
    cliente: "Victoria",
    total: 80,
    otro: true,
  },
  {
    cliente: "David",
    total: 140,
    otro: false,
  },
  {
    cliente: "Diego",
    total: 150,
    otro: true,
  },
  {
    cliente: "Cristian",
    total: 90,
    otro: true,
  },
  {
    cliente: "Laura",
    total: 120,
    otro: false,
  },
];

let resultado = ordenes.map((orden) => orden.total);
console.log(ordenes);
console.log(resultado);

// Sin mutaciones
let resultado2 = ordenes.map((orden, array) => {
  //orden.impuesto = 0.19;

  return {
    ...orden,
    impuesto: 0.19,
  };
});

console.log(resultado2);
