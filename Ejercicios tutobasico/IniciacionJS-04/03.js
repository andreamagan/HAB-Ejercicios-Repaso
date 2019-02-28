/**
 * Realiza un script que cuente el número de vocales que tiene un texto.
 */

let texto03 = prompt(
  "Introduzca un texto",
  "esternocleidomastoideo y supercalifragilisticoespialidoso"
);
let numchar03 = texto03.length;
let vocales = 0;

for (i = 0; i < numchar03; i++) {
  let char = texto03.charAt(i);
  if (
    char == "a" ||
    char == "A" ||
    char == "e" ||
    char == "E" ||
    char == "i" ||
    char == "I" ||
    char == "o" ||
    char == "O" ||
    char == "u" ||
    char == "U"
  ) {
    vocales++;
  }
}

document.write(`El texto tiene ${vocales} vocales`);
