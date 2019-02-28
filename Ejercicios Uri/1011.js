/*
 * Uri ejercicios principiante
 */

/**************************** 1011 - Volumen de la esfera ****************************/

let r = parseFloat(lines.shift());
const pi = 3.14159;
let volumen = (4.0 / 3) * pi * Math.pow(r, 3);

console.log("VOLUME = " + volumen.toFixed(3));
