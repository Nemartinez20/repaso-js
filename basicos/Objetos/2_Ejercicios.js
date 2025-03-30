const IVA_GENERAL = 1.9;
const IVA_ANTIGUO = 1.6;

//Usar arrow fuctions no se puede en los mettods de los objetos
//toca usar funciones normales --> ya que la arrow fucntion apunta a window global
//y la funcion normal apunta a el objeto
const item1 = {
  precio: 200,
  cantidad: 2,
  impuestos: IVA_ANTIGUO,
  ProductName: "Televisor",

  //como se debe hacer
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos;
  },

  //Como no se debe hacer
  //   calcularTotal: ()=>{
  //     console.log(this) //--> Apunta a windoes no a el objeto
  //   }
};

const item2 = {
  precio: 300,
  cantidad: 3,
  impuestos: IVA_GENERAL,
  ProductName: "Lavadora",
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos;
  },
};

const factura = {
  item1: item1,
  item2: item2,
  calcular: () => {
    const valorUno = item1.calcularTotal();
    const ValorDos = item2.calcularTotal();
    const totalFinal = valorUno + ValorDos;
    const total = console.log(
      `El valor de ${item1.ProductName} es: ${valorUno} y El valor del ${item2.ProductName} es ${ValorDos} y el total de el precio es: ${totalFinal}`
    );
    return total;
  },
};

factura.calcular();
