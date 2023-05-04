/**
 * map() => itera elementos de un arreglo
 *      - podemos retornar un nuevo arreglo
 *      - podemos actualizar el arreglo
 *
 * filter() => itera los elementos del arreglo y manda uno nuevo en base a una condicion
 */

//formando un arreglo de estudiantes con objetos

let array_students = [
    {
        nombre: "pepe hernan",
        edad: 20,
        correo: "pepe@gmail.com",
        direccion: "san salvador"
    },
    {
        nombre: "maria huezo",
        edad: 17,
        correo: "maria@gmail.com",
        direccion: "santa tecla"
    },
    {
        nombre: "carolina chacon",
        edad: 23,
        correo: "carolina@gmail.com",
        direccion: "san salvador"
    },
    {
        nombre: "kevin jimenez",
        edad: 25,
        correo: "kevin@gmail.com",
        direccion: "tejutla"
    }
]

/**
 * 2 parametros => indice, valor
 */
array_students.map((value, index) => {
    document.write(value.nombre + "<br>");
    document.write(value.edad + "<br>");
})

document.write("<h1>Actualizando la edad</h1>");
array_students.map(item => {
    item.edad += 1;
    return item;
})

//console.table(array_students);

let new_array = array_students.map(item => {
    item.edad += 1;
    return item;
});


//console.table(new_array);
console.log(new_array);

/** filtrado de datos */
document.write("<h1>Filtrado de datos</h1>");

/** filter => maneja una condicion */
let new_filter = array_students.filter( student => student.edad >= 20);
console.table(new_filter);

let new_filter_direction = array_students.filter(student => student.direccion == "san salvador");
console.table(new_filter_direction);

