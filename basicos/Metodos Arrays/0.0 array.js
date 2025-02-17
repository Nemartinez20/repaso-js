//
//
let miArray = [1, 2, 3, 4, 5, 7, 3, 4];

// Declaración

let array1 = [];
let array2 = new Array();

console.log(array1);
console.log(array2);

// Inicialización

console.log("Inicialización ---------------------------------------");
let array3 = [3, 6];
let array4 = new Array(3, 5);

console.log(array3);
console.log(array4);

console.log("Inicialización ---------------------------------------");
let array5 = ["hola", "mundo"];
let array6 = new Array("hola", "mundo", "nestor");

console.log(array5);
console.log(array6);

const productos = [
  { elemento: "Laptop", precio: 1200, categoria: "Electrónica" },
  { elemento: "Teléfono", precio: 800, categoria: "Electrónica" },
  { elemento: "Silla", precio: 150, categoria: "Muebles" },
  { elemento: "Mesa", precio: 300, categoria: "Muebles" },
  { elemento: "Camiseta", precio: 25, categoria: "Ropa" },
  { elemento: "Zapatos", precio: 60, categoria: "Ropa" },
  { elemento: "Audífonos", precio: 100, categoria: "Electrónica" },
  { elemento: "Refrigerador", precio: 900, categoria: "Electrodomésticos" },
  { elemento: "Microondas", precio: 250, categoria: "Electrodomésticos" },
  { elemento: "Libro", precio: 620, categoria: "Papelería" },
  { elemento: "cuaderno", precio: 420, categoria: "Papelería" },
  { elemento: "Lapiz", precio: 520, categoria: "Papelería" },
];

const ob = {
  precio: 400,
  categoria: "Papelería",
};

function filtra(productos) {
  return productos.filter(
    (producto) =>
      producto.precio >= ob.precio &&
      (ob.categoria === "all" || producto.categoria == ob.categoria)
  );
}

console.log(filtra(productos));
