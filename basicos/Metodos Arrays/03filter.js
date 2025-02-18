//
//
//
const productos = [
  { id: 1, elemento: "Laptop", precio: 1200, categoria: "Electrónica" },
  { id: 2, elemento: "Teléfono", precio: 800, categoria: "Electrónica" },
  { id: 3, elemento: "Silla", precio: 150, categoria: "Muebles" },
  { id: 4, elemento: "Mesa", precio: 300, categoria: "Muebles" },
  { id: 5, elemento: "Camiseta", precio: 25, categoria: "Ropa" },
  { id: 6, elemento: "Zapatos", precio: 60, categoria: "Ropa" },
  { id: 7, elemento: "Audífonos", precio: 100, categoria: "Electrónica" },
  {
    id: 8,
    elemento: "Refrigerador",
    precio: 900,
    categoria: "Electrodomésticos",
  },
  {
    id: 9,
    elemento: "Microondas",
    precio: 250,
    categoria: "Electrodomésticos",
  },
  { id: 10, elemento: "Libro", precio: 620, categoria: "Papelería" },
  { id: 11, elemento: "cuaderno", precio: 420, categoria: "Papelería" },
  { id: 12, elemento: "Lapiz", precio: 520, categoria: "Papelería" },
];

//
//
//
//
//
// Agregar elemento al array
let agregarfinal = {
  elemento: "Nevera",
  precio: 120,
  categoria: "Electrodomésticos",
};
let agregarInicio = {
  elemento: "Televisor",
  precio: 1200,
  categoria: "Electrodomésticos",
};

productos.push(agregarfinal);
productos.unshift(agregarInicio);

//
//

objetoBusqueda = {
  precioMin: 1000,
  preciomax: 1200,
  categoria: "All",
};

function filtrar(productos) {
  return productos.filter(
    (producto) =>
      producto.precio >= objetoBusqueda.precioMin &&
      producto.precio <= objetoBusqueda.preciomax &&
      (objetoBusqueda.categoria == "All" ||
        producto.categoria == objetoBusqueda.categoria)
  );
}

console.log(filtrar(productos));

console.log("===================================");

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
    cliente: "cristian",
    total: 190,
    otro: true,
  },
  {
    cliente: "Laura",
    total: 120,
    otro: false,
  },
  {
    cliente: "juanpablo",
    total: 120,
    otro: true,
  },
  {
    cliente: "camilo",
    total: 220,
    otro: false,
  },
];

let resul = ordenes.filter((orden) => {
  return orden.total > 100 && orden.otro == true;
});
console.log(resul);

const palabras = ["juan", "limite", "computador", "elemento"];

//CON LE BULCE FOR
const newArray = [];

for (let i = 0; i < palabras.length; i++) {
  palabra = palabras[i];
  console.log(palabra);

  if (palabra.length <= 6) {
    newArray.push(palabras[i]);
  }
}

console.log(newArray);

//CON EL METODO FILTER
console.log("con el metodo filter");

let nuevo = palabras.filter((palabra) => palabra.length <= 6);
console.log(nuevo);
console.log("Original", palabras);

busqueda = {
  nombre: "juan",
};

function buscar(string) {
  return ordenes.filter((orden) => {
    return orden.cliente.includes(string);
  });
}

console.log(buscar("c"));
