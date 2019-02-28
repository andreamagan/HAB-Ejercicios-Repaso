/**
 * Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2. Ejemplo de resultado:

Resultado 1: 1
Resultado 2: X
Resultado 3: 2
…..
Resultado 14: 2
 */

for (i = 1; i < 15; i++) {
  num = Math.floor(Math.random() * 3);
  console.log(num);
  if (num == 0) {
    num = "X";
  }
  document.write("Resultado " + i + ": " + num + "</br>");
}
