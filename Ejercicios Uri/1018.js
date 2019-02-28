/*
 * Uri ejercicios principiante
 */

/**************************** 1018 - Billetes ****************************/
let valor = 999999; // parseInt(lines.shift());
let billetes = [100, 50, 20, 10, 5, 2, 1];
let resto = valor;

function contarBilletes(element, index, array) {
  //console.log(resto);
  let sumBillete = 0;
  while (resto >= element) {
    //console.log('billete:' + element);

    resto = resto - element;
    sumBillete++;

    //console.log('el resto despues del ' + element + ' es ' + resto);
  }
  console.log(
    sumBillete + " nota (s) de R$ " + element.toFixed(2).replace(".", ",")
  );

  return resto;
}
console.log(valor);

billetes.forEach(contarBilletes);
