/**
 * Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno
 */

let num1;
let num2;
let num3;

let num;
let i = 0;

do {
  num = Math.floor(Math.random() * 99 + 1);
  if (num != num1 && num != num2 && num != num3) {
    i++;

    if (i == 1) {
      num1 = num;
      document.write("El primer número: " + num1 + "</br>");
    }
    if (i == 2) {
      num2 = num;
      document.write("El segundo número: " + num2 + "</br>");
    }
    if (i == 3) {
      num3 = num;
      document.write("El tercer número: " + num3 + "</br>");
    }
  }
} while (i < 3);
