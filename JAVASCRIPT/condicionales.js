/**
 * if-else - if- else if -else - switch
 * operador ternario
 */

//verificando si la persona es mayor de edad

let edad = prompt("Ingrese su edad"); //con el prompt solicitamos datos desde el navegador

if(edad >= 18){
    //imprimiento un mensaje en html
    document.write("Sos mayor de edad");
}else{
    document.write("Sos menor de edad :)");
}

//operador ternario => manera mas optimizada para trabajar el if-else

//verificar si el numero estan en el rango entre 50 y 150
let numero = prompt("Ingresa un numero");
//if = ? si la condicion la cumple mandamos un cierto de codigo 
document.write(numero >= 50 && numero <= 150 ? "estas en el rango" : "no estas en el rango");

/*if(numero >= 50 && numero <= 150){
    document.write("estas en el rango");
}else{
    document.write("NO estas en el rango");
}*/
