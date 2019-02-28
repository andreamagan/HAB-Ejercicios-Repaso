/**
 * Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter sin usar el método replace.
 * Por ejemplo, si tecleo “hola qué tal”,
 * deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let texto02 = prompt("Introduce tu texto", "hola que tal");
let numchar = texto02.length;

for (i = 0; i < numchar; i++) {
  let letra = texto02.charAt(i);
  if (i == numchar - 1) {
    document.write(letra);
  } else {
    document.write(`${letra}-`);
  }
}
