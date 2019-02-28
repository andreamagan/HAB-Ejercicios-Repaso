/*
 * Uri ejercicios principiante
 */

/**************************** 1005 - Promedio 1 ****************************/

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let MEDIA = (a*0.35 + b*0.75)/(0.35+0.75);

console.log('MEDIA = ' + MEDIA.toFixed(5));
