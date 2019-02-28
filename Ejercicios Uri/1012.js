/*
 * Uri ejercicios principiante
 */

/**************************** 1012 - Area ****************************/

let arr = lines.shift().split(" ", 3);

let a = parseFloat(arr[0]);
let b = parseFloat(arr[1]);
let c = parseFloat(arr[2]);
const pi = 3.14159;

let aTriangulo = (a * c) / 2;
let aCirculo = pi * Math.pow(c, 2);
let aTrapecio = ((a + b) * c) / 2;
let aCuadrado = Math.pow(b, 2);
let aRectangulo = a * b;

console.log("TRIANGULO: " + aTriangulo.toFixed(3));
console.log("CIRCULO: " + aCirculo.toFixed(3));
console.log("TRAPEZIO: " + aTrapecio.toFixed(3));
console.log("QUADRADO: " + aCuadrado.toFixed(3));
console.log("RETANGULO: " + aRectangulo.toFixed(3));
