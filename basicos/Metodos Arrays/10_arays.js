const miArray = [1, 2, 3, 4, 5, 6];

//acceder
console.log(miArray[2]);

primeros = miArray.slice(0, 3);
segundos = miArray.slice(3);
console.log(primeros);
console.log(segundos);

let texto = "Hola mundo estory aprendiedo a programr";
array = texto.split(" "); //convertir en u array  tomando lo espacios
newarray = array.slice(0, 3); //obtiene los primeros
finalString = newarray.join(" ");

console.log(array);
console.log(newarray);
console.log(finalString);
