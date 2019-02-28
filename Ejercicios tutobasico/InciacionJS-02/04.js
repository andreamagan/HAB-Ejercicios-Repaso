/**
 * Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */

 let max = 500;
 
 //imprimir los numeros de 1 a 500
 for(let i=1; i<max; i++) {
     document.write(i);

    //si es divisor de 4
    if(i%4 ==0){
        document.write(' Múltipo de 4');
    } 

    if(i%9==0){
        document.write(' Múltipo de 9');
    }

    document.write('</br>');

    //cada 5 imprimimos una linea horizontal
    if(i%5==0){
        document.write('<hr>');
    }
}