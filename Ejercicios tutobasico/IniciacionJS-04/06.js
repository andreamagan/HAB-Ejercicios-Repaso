/**
 * Realiza un script que pida un texto e indique si es un palíndromo.
 * Ejemplo de palíndromo: “Dabale arroz a la zorra el abad”.
 */

let palindromoInput = prompt(
  "Introduce un texto para combropar si es un palíndromo",
  "Yo dono rosas, oro no doy"
);

palindromo = palindromoInput
  .toLowerCase()
  .replace(/[, ]+/g, "")
  .replace(new RegExp(/\s/g), "")
  .replace(new RegExp(/[àáâãäå]/g), "a")
  .replace(new RegExp(/ç/g), "c")
  .replace(new RegExp(/[èéêë]/g), "e")
  .replace(new RegExp(/[ìíîï]/g), "i")
  .replace(new RegExp(/ñ/g), "n")
  .replace(new RegExp(/[òóôõö]/g), "o")
  .replace(new RegExp(/[ùúûü]/g), "u")
  .replace(new RegExp(/\W/g), "")
  .trim();
console.log(palindromo);

let numchar06 = palindromo.length;
let palindromoReves = "";

for (i = 0; i < numchar06; i++) {
  char = palindromo.charAt(i);
  palindromoReves = char + palindromoReves;
}

if (palindromo == palindromoReves) {
  document.write(`El texto "${palindromoInput}" es palíndromo`);
} else {
  document.write(`El texto "${palindromoInput}" NO es palíndromo`);
}
