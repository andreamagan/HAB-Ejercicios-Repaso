/**
 *  Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :
1
12
123
1234
12345
123456
 */

let rep03 = prompt('Introduce un numero menor de 50: ', 30);

if(Number(rep03) == rep03){
    if(rep03>0 && rep03<50){
        for(let i=0; i<=rep03;i++){
            //bucle de 1 a i
            for(let j = 1; j<=i;j++) {
                document.write(j);
            }
            document.write('</br>')
        }

    }else{
        alert('El numero es mayor de 50');
    }
}else {
    alert('El imput no es correcto');
}