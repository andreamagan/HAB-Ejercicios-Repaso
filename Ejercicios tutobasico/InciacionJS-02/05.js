/**
 * Realiza un script que pida número de filas y columnas y escriba una tabla. 
 * Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
 * Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

 let filas = Number(prompt('Introduce el número de filas'));
 let columnas = Number(prompt('Introduce el número de columnas'));

 let total = filas*columnas;

 //Imprmir la tabla
 document.write('<table border>');

 //bucle para las filas
 for (let i =0; i<filas; i++) {
     //tr para iniciar la fila
     document.write('<tr>');

    //bucle para las columnas
    for (j=0; j<columnas;j++){
        //td para las celdas
        document.write('<td>');
        //valor de la celda
        document.write(total);
        total--;
        //tenemos que cerrar las etiquetas
        document.write('</td>');
    }
      document.write('</tr>');
 }
 