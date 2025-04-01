productos = [
  {
    id: 1,
    nombre: "Leche Entera",
    precio: 1.5,
    categoria: "Lácteos",
    detalle: "Leche entera pasteurizada de 1 litro.",
  },
  {
    id: 2,
    nombre: "Pan Baguette",
    precio: 2.0,
    categoria: "Panadería",
    detalle: "Pan baguette fresco de 250g.",
  },
  {
    id: 3,
    nombre: "Manzana Roja",
    precio: 0.8,
    categoria: "Frutas",
    detalle: "Manzana roja fresca por unidad.",
  },
  {
    id: 4,
    nombre: "Arroz Blanco",
    precio: 3.2,
    categoria: "Granos y Cereales",
    detalle: "Bolsa de arroz blanco de 1kg.",
  },
  {
    id: 5,
    nombre: "Pasta Spaghetti",
    precio: 1.9,
    categoria: "Granos y Cereales",
    detalle: "Pasta tipo spaghetti de 500g.",
  },
  {
    id: 6,
    nombre: "Huevos Frescos",
    precio: 2.5,
    categoria: "Lácteos",
    detalle: "Docena de huevos frescos.",
  },
  {
    id: 7,
    nombre: "Queso Cheddar",
    precio: 4.0,
    categoria: "Lácteos",
    detalle: "Queso cheddar en lonjas de 200g.",
  },
  {
    id: 8,
    nombre: "Tomate",
    precio: 1.2,
    categoria: "Verduras",
    detalle: "Tomate fresco por kilogramo.",
  },
  {
    id: 9,
    nombre: "Cebolla",
    precio: 1.0,
    categoria: "Verduras",
    detalle: "Cebolla blanca por kilogramo.",
  },
  {
    id: 10,
    nombre: "Pollo Entero",
    precio: 7.5,
    categoria: "Carnes",
    detalle: "Pollo entero fresco de 2kg.",
  },
  {
    id: 11,
    nombre: "Carne de Res Molida",
    precio: 5.2,
    categoria: "Carnes",
    detalle: "500g de carne de res molida.",
  },
  {
    id: 12,
    nombre: "Jugo de Naranja",
    precio: 3.0,
    categoria: "Bebidas",
    detalle: "Jugo de naranja natural de 1 litro.",
  },
  {
    id: 13,
    nombre: "Café Molido",
    precio: 6.0,
    categoria: "Bebidas",
    detalle: "Paquete de café molido de 500g.",
  },
  {
    id: 14,
    nombre: "Galletas de Chocolate",
    precio: 2.3,
    categoria: "Dulces",
    detalle: "Paquete de galletas con chispas de chocolate.",
  },
  {
    id: 15,
    nombre: "Cereal de Avena",
    precio: 4.5,
    categoria: "Desayunos",
    detalle: "Caja de cereal de avena de 750g.",
  },
  {
    id: 16,
    nombre: "Miel de Abeja",
    precio: 5.5,
    categoria: "Dulces",
    detalle: "Frasco de miel de abeja pura de 500g.",
  },
  {
    id: 17,
    nombre: "Sal de Mesa",
    precio: 1.1,
    categoria: "Condimentos",
    detalle: "Sal de mesa en paquete de 1kg.",
  },
  {
    id: 18,
    nombre: "Aceite de Oliva",
    precio: 6.5,
    categoria: "Aceites",
    detalle: "Botella de aceite de oliva extra virgen de 500ml.",
  },
  {
    id: 19,
    nombre: "Papel Higiénico",
    precio: 3.9,
    categoria: "Hogar",
    detalle: "Paquete de 4 rollos de papel higiénico.",
  },
  {
    id: 20,
    nombre: "Detergente en Polvo",
    precio: 8.0,
    categoria: "Limpieza",
    detalle: "Bolsa de detergente en polvo de 3kg.",
  },
  // Agregar hasta 50 productos similares
];

console.log(typeof productos);

let busqueda = {
  precio: 3,
  categoria: "All",
};

newProduts = productos.filter((element) => {
  return (
    element.precio >= busqueda.precio &&
    (busqueda.categoria == "All" || element.categoria == busqueda.categoria)
  );
});
console.log(newProduts);
