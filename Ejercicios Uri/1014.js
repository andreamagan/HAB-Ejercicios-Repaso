/*
 * Uri ejercicios principiante
 */

/**************************** 1014 - Consumo ****************************/

//let lines = [4554 ,464.6]

let distancia = parseInt(lines.shift());
let combustible = parseFloat(lines.shift());
let promedio = distancia / combustible;

console.log(promedio.toFixed(3) + " km/l");
