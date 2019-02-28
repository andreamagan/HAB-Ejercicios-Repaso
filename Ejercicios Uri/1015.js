/*
 * Uri ejercicios principiante
 */

/**************************** 1015 - Distancia Entre dos Puntos ****************************/

//let lines = ['1.0 7.0', '5.0 9.0']

let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");
//console.log(p1);
//console.log(p2);

let distancia = Math.sqrt(
  Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)
);

console.log(distancia.toFixed(4));
