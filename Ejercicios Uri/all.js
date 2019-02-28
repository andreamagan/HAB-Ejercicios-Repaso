/*
 * Uri ejercicios principiante
 */

/**************************** 1001 - Extremadamente Básico  ****************************/

/*
let a = +prompt("Introduce un número");
let b = +prompt("Introduce otro número");
console.log(`x = ${a+b}`);
*/

/* 
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
console.log('X = ' + (a+b));
*/

/**************************** 1002 - Área del Círculo ****************************/

/*
var r = parseFloat(lines.shift());
var pi = 3.14159;
let A =  pi * Math.pow(r,2);

console.log('A='+ A.toFixed(4));
*/

/**************************** 1003 - Suma Simple ****************************/

/*
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let SOMA = a+b;

console.log('SOMA = ' + SOMA);
*/

/**************************** 1004 - Producto Simple ****************************/

/*
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let PROD = a*b;

console.log('PROD = ' + PROD);
*/

/**************************** 1005 - Promedio 1 ****************************/
/*
let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let MEDIA = (a*0.35 + b*0.75)/(0.35+0.75);

console.log('MEDIA = ' + MEDIA.toFixed(5));
*/

/**************************** 1006 - Promedio 2 ****************************/
/*
let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let MEDIA = (a*0.2 + b*0.3 + c*0.5)/(0.2+0.3+0.5);

console.log('MEDIA = ' + MEDIA.toFixed(1));
*/

/**************************** 1007 - Diferencia ****************************/
/*
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

let DIFERENCA = (a*b - c*d);
console.log('DIFERENCA = ' + DIFERENCA);
*/

/**************************** 1008 - Salario ****************************/

/*
let numeroEmpleado = parseInt(lines.shift());
let horasTrabajadas = parseInt(lines.shift());
let precioHora = parseFloat(lines.shift());
let SALARY = horasTrabajadas*precioHora;

console.log('NUMBER = ' + numeroEmpleado);
console.log('SALARY = U$ ' + SALARY.toFixed(2));
*/

/**************************** 1009 - Salario con Bonus ****************************/

/*
let nombreVendedor = (lines.shift());
let salarioFijo = parseFloat(lines.shift());
let totalVentas = parseFloat(lines.shift());

let salarioMes = salarioFijo + totalVentas*0.15;
console.log('TOTAL = R$ ' + salarioMes.toFixed(2));
*/

/**************************** 1010 - Calculo Simple ****************************/
/*
//let producto1 = [36, 1, 25.09];
//let producto2 = [42, 2, 65.10];

let producto1 = lines.shift().split(" ",3);
let producto2 = lines.shift().split(" ",3);

let total = producto1[1]*producto1[2]+producto2[1]*producto2[2];
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2)); 
*/

/**************************** 1011 - Volumen de la esfera ****************************/

/*
let r = parseFloat(lines.shift());
const pi = 3.14159;
let volumen =  (4.0/3) * pi * Math.pow(r,3);

console.log('VOLUME = '+ volumen.toFixed(3));
*/

/**************************** 1012 - Area ****************************/

/*
let arr = lines.shift().split(" ",3);

let a = parseFloat(arr[0]);
let b = parseFloat(arr[1]);
let c = parseFloat(arr[2]);
const pi = 3.14159;

let aTriangulo = a*c/2;
let aCirculo = pi*Math.pow(c,2);
let aTrapecio = ((a+b)*c)/2;
let aCuadrado = Math.pow(b,2);
let aRectangulo = a*b;

console.log('TRIANGULO: ' + aTriangulo.toFixed(3));
console.log('CIRCULO: ' + aCirculo.toFixed(3));
console.log('TRAPEZIO: ' + aTrapecio.toFixed(3));
console.log('QUADRADO: ' + aCuadrado.toFixed(3));
console.log('RETANGULO: ' + aRectangulo.toFixed(3));
*/

/**************************** 1013 - Mayor ****************************/
/*
let lines = ["1 2 18", "1 3 5"];
let arr = lines.shift().split(" ", 3);

let a = parseInt(arr[0]);
let b = parseInt(arr[1]);
let c = parseInt(arr[2]);

let numMayorAB = (a + b + Math.abs(a - b)) / 2;
let numMayorABC = (numMayorAB + c + Math.abs(numMayorAB - c)) / 2;

console.log(numMayorABC + " eh o maior");
*/

/**************************** 1014 - Consumo ****************************/
/*
//let lines = [4554 ,464.6]

let distancia = parseInt(lines.shift());
let combustible = parseFloat(lines.shift());
let promedio = distancia/combustible;

console.log(promedio.toFixed(3) + ' km/l');
*/

/**************************** 1015 - Distancia Entre dos Puntos ****************************/

/*
//let lines = ['1.0 7.0', '5.0 9.0']

let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");
//console.log(p1);
//console.log(p2);

let distancia = Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2));

console.log(distancia.toFixed(4));

*/

/**************************** 1016 - Distancia ****************************/

/*
let distancia = parseInt(lines.shift());
let velCocheX = 60;
let velCocheY = 90;

let tiempoEnAlejarse = (distancia / (velCocheY-velCocheX))*60;

console.log(tiempoEnAlejarse + ' minutos');
*/

/**************************** 1017 - Combustible Gastado ****************************/
/*
let lines = [2, 92]
let consumo = 12;
let tiempo = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());

let distancia = tiempo*velMedia;
let consumoViaje = distancia/consumo;
console.log(consumoViaje.toFixed(3));
*/

/**************************** 1018 - Billetes ****************************/
/*
let valor = 999999 // parseInt(lines.shift());
let billetes = [100, 50, 20, 10, 5, 2, 1];
let resto = valor;

function contarBilletes (element, index, array){
    //console.log(resto);
    let sumBillete = 0;
    while (resto >= element) {
       //console.log('billete:' + element);
       
        
        resto = resto-element;
        sumBillete++;
        

        //console.log('el resto despues del ' + element + ' es ' + resto);
        }
        console.log(sumBillete + ' nota (s) de R$ '+ element.toFixed(2).replace(".", ","));

    return resto;
} 
console.log(valor);

billetes.forEach(contarBilletes);
*/
