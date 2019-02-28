/*
 * Uri ejercicios principiante
 */

/**************************** 1016 - Distancia ****************************/

let distancia = parseInt(lines.shift());
let velCocheX = 60;
let velCocheY = 90;

let tiempoEnAlejarse = (distancia / (velCocheY - velCocheX)) * 60;

console.log(tiempoEnAlejarse + " minutos");
