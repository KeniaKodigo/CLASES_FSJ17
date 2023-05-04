/**
 * ciclo forEach: itera solo arreglos
 */

let notas_estudiantiles = [8.5,9,5,6.3,7,10,4.2,6.9,8.2,2.2,5];

/**
 * sacar cuantas personas tuvieron mas de 7 
 * sacar el numero de personas que se pueden salvar si tiene mas de 5 a menor igual a 6.5
 * sacar cuantas personas tienen menos de 5
 * */

let cont_pasaron = 0;
let cont_no_pasaron = 0;
let cont_posibles = 0;

notas_estudiantiles.forEach(nota => {
    /**if(nota >= 7){
        cont_pasaron++;
    }else{
        cont_no_pasaron++;
    }*/

    if(nota >= 7){
        cont_pasaron++;
    }else if(nota >= 5 && nota <= 6.9){
        cont_posibles++;
    }else{
        cont_no_pasaron++;
    }
});

document.write("Total de estudiantes que pasaron fueron " + cont_pasaron + "<br>");
document.write("Total de estudiantes que pueden estar en recuperacion fueron " + cont_posibles + "<br>");
document.write("Total de estudiantes que reprobaron fueron " + cont_no_pasaron);
