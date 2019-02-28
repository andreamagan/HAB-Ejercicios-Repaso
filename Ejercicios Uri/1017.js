/*
 * Uri ejercicios principiante
 */

/**************************** 1017 - Combustible Gastado ****************************/

let lines = [2, 92];
let consumo = 12;
let tiempo = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());

let distancia = tiempo * velMedia;
let consumoViaje = distancia / consumo;
console.log(consumoViaje.toFixed(3));
