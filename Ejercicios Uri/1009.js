/*
 * Uri ejercicios principiante
 */

/**************************** 1009 - Salario con Bonus ****************************/
let nombreVendedor = (lines.shift());
let salarioFijo = parseFloat(lines.shift());
let totalVentas = parseFloat(lines.shift());

let salarioMes = salarioFijo + totalVentas*0.15;
console.log('TOTAL = R$ ' + salarioMes.toFixed(2));
