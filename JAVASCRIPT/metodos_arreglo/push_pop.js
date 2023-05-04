/**
 * push() => agrega un elemento al final del arreglo
 * 
 * 
 * pop() => elimina el ultimo elemento del arreglo
 */

let datos = [25,100,250,true,"z","c"];
datos.push("d",36.2,false);
console.table(datos);

let ultimo = datos.pop(); 
console.log(ultimo);
console.table(datos);

//splice() => eliminar el indice que uno quiere


