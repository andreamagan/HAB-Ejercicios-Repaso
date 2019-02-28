/**
 * Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor
 */

let nombre1 = prompt('Nombre1: ');
let edad1 = Number(prompt('Edad1: '));

let nombre2 = prompt('Nombre2: ');
let edad2 = Number(prompt('Edad2: '));

let nombre3 = prompt('Nombre3: ');
let edad3 = Number(prompt('Edad3: '));

let mayor = Math.max(edad1,edad2,edad3);


if (mayor == edad1){
    document.write(`El mayor es: ${nombre1}`);
} else if (mayor == edad2){
    document.write(`El mayor es: ${nombre2}`);
}else {
    document.write(`El mayor es: ${nombre3}`);
}

