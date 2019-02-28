/*
 * Uri ejercicios principiante
 */

/**************************** 1013 - Mayor ****************************/

let arr = lines.shift().split(" ", 3);

let a = parseInt(arr[0]);
let b = parseInt(arr[1]);
let c = parseInt(arr[2]);

let numMayorAB = (a + b + Math.abs(a - b)) / 2;
let numMayorABC = (numMayorAB + c + Math.abs(numMayorAB - c)) / 2;

console.log(numMayorABC + " eh o maior");
