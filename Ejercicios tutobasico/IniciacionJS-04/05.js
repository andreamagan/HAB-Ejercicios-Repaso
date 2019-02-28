/**
 * Realiza un script que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

let texto05 = prompt("Introduce tu texto", "hola que tal");
let numchar = texto05.length;

let invertirPosicion = "";

for (i = 0; i < numchar; i++) {
  let char = texto05.charAt(i);
  invertirPosicion = char + invertirPosicion;
}

document.write(invertirPosicion);
