/*
 * Uri ejercicios principiante
 */

/**************************** 1010 - Calculo Simple ****************************/
//Imput
//let producto1 = [36, 1, 25.09];
//let producto2 = [42, 2, 65.10];

let producto1 = lines.shift().split(" ",3);
let producto2 = lines.shift().split(" ",3);

let total = producto1[1]*producto1[2]+producto2[1]*producto2[2];
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2)); 
