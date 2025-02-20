//Programacion asincrona

//Codigo sincrono

console.log("Inicio--------");
for (let i = 0; i < 100000; i++) {}
console.log("Fin--------");

//Event loop (pila de eventos)

//componentes del event loop

//1. call stack (pila de ejecucion)
//2. Web Apis (Apis del navegador) o Node.js setTimeout()...
//3. Task queue (Cola de tares) y Microtaskqueue

//Codigo asincrono

//callbacks

console.log("Inicio");

setTimeout(() => {
  console.log("Esto se ejecuta despues de 3sg");
}, 3000);
console.log("fin");

//Promesas

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve("todo marcha bien desde la promesa");
    } else {
      reject("ha salido algo mal desde la promesa");
    }
  }, 3000);
});

promesa
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console, log(error);
  });
