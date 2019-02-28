/**
 * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let rep = prompt('Introduce un numero: ', 30);

if ( Number(rep)==rep){

    for ( let i = rep; i>=1; i-- ){
        for(let j = i; j >=1; j--){
            document.write(i);
        }
        document.write('<br>');
}

} else {
    alert('El imput no es válido. Introduce un número');
};
