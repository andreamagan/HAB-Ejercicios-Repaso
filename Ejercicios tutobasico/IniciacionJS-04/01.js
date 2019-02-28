/**
 * Realiza un script que pida un texto y lo muestre en mayúsculas.
 */

let texto = prompt("Introduce un texto", "hola, como estás?");

let textoToUppercase = texto.toUpperCase(texto);
document.write("El texto original: " + texto + "</br>");
document.write("El texto en mayúsculas: " + textoToUppercase);
