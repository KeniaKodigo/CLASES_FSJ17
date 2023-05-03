/**
 * ciclo repetitivos: inicio (contador), condicionante (limite del ciclo), incremento/decremento
 */

//Utilizando for

//empezar del 1 hasta el 20
/*for(let i=1; i <= 20; i++){
    //1 = 1 + 1 = 2
    //2 "= 2 + 1 = 3
    // i++ equivale  i = i + 1

    //el + hace referencia a que estamos concatenando
    // 5 + 2 = 52
    document.write("Secuencia de numeros:" + i + "<br>");
}*/

//trabajando con cadenas
let mensaje = "Hola mundo!"; 
console.log(mensaje.length); //11

//console.log(arreglo.length);//4
for(let j=0; j < mensaje.length; j++){
    document.write(mensaje[j] + "<br>");
    //mensaje[0] => H
    //mensaje[1] => o
    /**
     * ...
     * mensaje[10] => !
     */
}

let arreglo = ["celular","audifonos","camara","mouse"]; 
for(let k= arreglo.length - 1; k >= 0; k--){
    //k-- equeivalente k = k - 1
    document.write(arreglo[k] + " * ");
}




