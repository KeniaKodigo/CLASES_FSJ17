//comentario en sola linea
/**
 * Asignacion de variables
 * 
 * let y var (palabras reservada)
 * 
 * let: las variables no se puede utilizar su nombre mas de una vez y le podemos asignar un dato o no
 *  se trabaja de manera local
 * 
 * var: las variables se puede sobredeclarar y podemos asignarle un dato o no
 * se trabaja de manera global
 */

//declarando variables
let nombre = "maria";
let variable;

//let nombre = "juana";
var apellido;
//estamos sobredeclarando la variable
var apellido = "hernandez";
//llamando variables
nombre; //maria
nombre = "juana";
nombre; //juana
apellido;

//definiendo una constante const
const PI = 3.1416; //valor estatico
const num = 25;

//imprimiendo en javascript por medio de la consola
console.log(PI);

//TIPOS DE DATOS
let cadena = "hola chicos!"; //string
let numero = 25; //int
let decimal = 36.2; //double
let dato = true; //booleano
let dato2 = false; //booleano
//array
let arreglo_frutas = Array("manzana","pera","uva","naranja"); //tamaño = 4 | posiciones = 3
let arreglo_productos = ["camisa",5,true,25.2];
console.log(arreglo_productos);
//objeto
let animal = {
    //atributo => valor
    nombre: "pepe",
    edad: 5,
    raza: "angora",
    color: "cafe y blanco"
}
console.log(animal);
//imprimiendo una posicion en especifico del arreglo
console.log(arreglo_frutas[1]);
//imprimiendo un atributo en especifico del objeto
console.log(animal.nombre);
//tipo de dato nulo
let telefono = null;
let correo; //undefined


