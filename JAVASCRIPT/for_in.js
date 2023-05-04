/**
 * ciclo for in
 * 
 * recorre arreglo y objetos para mostrar el indice de los valores
 */
let verduras = ["cebolla","pipian","chile","papa","ajo"];

for(const indice in verduras){
    /**
     * verduras[indice] => sacamos el valor de cada elemento del arreglo
     */
    document.write("Valor: " + verduras[indice] + "<br>");
    document.write("Indice: " + indice + "<br>");
}


let estudiante = {
    nombre: "Pepe Hernan",
    edad: 20,
    carnet: "PH2023",
    correo: "pepe@gmail.com"
}

for(const atributo in estudiante){
    //document.write(atributo + ": " + estudiante[atributo] + "<br>");
    document.write(`key: ${atributo} value: ${estudiante[atributo]}`);
}

