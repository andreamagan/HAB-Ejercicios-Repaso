/**
 * Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis.
 * Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”.
 * Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
 */

let texto04 = prompt("Introduce un texto", "Texto de (ejemplo) que funciona");
let numchar04 = texto04.length;

let inicio;
let final = numchar04;

for (i = 0; i < numchar04; i++) {
  let char = texto04.charAt(i);

  if (char == "(") {
    inicio = i + 1;
    console.log("inicio " + inicio);
  }

  if (char == ")") {
    final = i;
    console.log("final " + final);
  }
}

let substring = texto04.substring(inicio, final);

if (inicio == undefined) {
  document.write(" ");
} else {
  document.write(substring);
}
