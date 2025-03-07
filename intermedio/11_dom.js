//Manejo del DOM (Document Object Model)

console.log(document);

// - Seleccion  de elementos

//Metods basicos

const app = document.getElementById("app");
console.log(app);
const container = document.getElementsByClassName("container");
console.log(container);

//Metodos modernos

const app2 = document.querySelector("#app");
console.log(app2.children);

//modificar texto
const titulo = document.querySelector(".titulo");
titulo.textContent = "Hola Mundo canal de youtube";

// const mouse = document.addEventListener("pointermove", mifuncion);

// function mifuncion(event) {
//   const { clientX, clientY } = event;
//   console.log("mouse", clientX, clientY);
// }

//Modificar atributos

const link = document.querySelector("a");
const url = link.getAttribute("href");
console.log(url);

// Cambio de el atributo

link.setAttribute("href", "http://avanzado");
const link2 = document.querySelector("a");
console.log(link2);

//Comprobacion de atributo
const tiene = link.hasAttribute("target"); // devuelve true o false si tene un determinado atributo
console.log(tiene);

//Eliminar atributos

link.removeAttribute("target");
const link3 = document.querySelector("a");
console.log(link3);
