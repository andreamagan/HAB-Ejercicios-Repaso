/*
 * Uri ejercicios principiante
 */

/**************************** 1006 - Promedio 2 ****************************/

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let MEDIA = (a*0.2 + b*0.3 + c*0.5)/(0.2+0.3+0.5);

console.log('MEDIA = ' + MEDIA.toFixed(1));
