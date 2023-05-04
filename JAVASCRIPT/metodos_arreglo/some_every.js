/**
 * some() => devuelve true o false, si un elemento del arreglo cumple con la condicion devuelve true
 * 
 * every() => devuelve true o false, todos los elementos del arreglo tiene que cumplir la condicion para que devuelva true
 */

let arreglo_animal = [
    {
        codigo: 1,
        nombre: "pancho",
        raza: "pastor aleman",
        edad: 5
    },
    {
        codigo: 2,
        nombre: "max",
        raza: "chao chao",
        edad: 3
    },
    {
        codigo: 3,
        nombre: "pelusa",
        raza: "angora",
        edad: 6
    },
    {
        codigo: 4,
        nombre: "oso",
        raza: "pitbull",
        edad: 2
    }
]

// verificar si todos los animales tiene mas de 4 años
let booleano = arreglo_animal.every((value) => value.edad >= 4);
document.write(booleano); //false

let booleano2 = arreglo_animal.every((item) => item.edad <= 6);
document.write(booleano2 + "<br>"); //true

//verificar si el animal existe en el arreglo en base a su codigo
let codigo = arreglo_animal.some((item) => item.codigo == 3);
document.write(codigo); //true