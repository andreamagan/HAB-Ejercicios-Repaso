/*
 * Uri ejercicios principiante
 */

/**************************** 1008 - Salario ****************************/

let numeroEmpleado = parseInt(lines.shift());
let horasTrabajadas = parseInt(lines.shift());
let precioHora = parseFloat(lines.shift());
let SALARY = horasTrabajadas*precioHora;

console.log('NUMBER = ' + numeroEmpleado);
console.log('SALARY = U$ ' + SALARY.toFixed(2));
