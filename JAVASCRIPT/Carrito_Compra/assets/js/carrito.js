console.log(document);
/** prueba de formulario */
function capturarEdad(){
    //let nombre = document.querySelector('.nombre');
    let resultado = document.querySelector('#resultado');

    let edad = document.querySelector('.edad');
    if(edad.value >= 18){
        alert("Eres Mayor de edad");
        resultado.textContent = "Eres mayor de edad";
    }else{
        resultado.textContent = "Eres menor de edad";
    }
    //console.log(nombre.value);

    //alert("Tu nombre es: " + nombre.value);
    //resultado.textContent = nombre.value;
}

//console.log(carrito);
/*const titulo = document.querySelector('h1');
/** sacando el contenido del h1 (texto)
console.log(titulo.textContent);*/ //textContent, value

/** APARTADO DEL CARRITO */
/** asignacion de variables */
const carrito = document.getElementById('carrito'); /** llamando al elemento del html */
const bodyCarrito = document.querySelector('tbody');
const footerCarrito = document.querySelector('tfoot');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.getElementById('lista-cursos');
let arregloCarrito = [];
//llamando al metodo para que se ejecute
cargarEventos();

//Metodo para cargar todos los eventos
function cargarEventos(){
    //addEvenlistener
    listaCursos.addEventListener('click', agregarCurso);
}

/** tipos de funciones */

/*funcion de flecha
agregarCarrito();

const agregarCarrito = () => {
    //code..
}*/

/** agregando un curso */
function agregarCurso(e){
    //evitar que el hipervinculo siga a una url
    e.preventDefault();
    //condicionamos si la persona le dio click al boton
    if(e.target.classList.contains('agregar-carrito')){ //true
        /** verificando si esto me trae informacion */
        console.log(e.target);

        /** devolviendo los elemento padre del boton agregar */
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado); //argumento es el valor que se le asigna al parametro
    }
}

//metodo para almacenar un curso al arreglo
function leerDatosCurso(curso){ //parametro que hace referencia a los que el usuario me va mandar
    console.log(curso);

    //creando un objeto de los valores que trae el curso
    const informacionCurso = {
        imagen: curso.querySelector('img').src, //capturando la ruta de la imagen
        titulo: curso.querySelector('h5').textContent, //sacando el texto del h5
        precio: curso.querySelector('.precio').textContent, //sacando el texto del parrafo del precio
        id: curso.querySelector('a').getAttribute('data-id'), //sacando el valor del data-id del hipervinculo agregar
        cantidad: 1
    }

    //agregando los objetos del curso al arreglo
    //... nos ayuda hacer copias de los arreglos
    //guardamos en una copia el curso que habia seleccionado mas el actual
    //arregloCarrito = [...arregloCarrito, informacionCurso];

    //verificando si el curso existe en el arreglo
    //some, every => true o false

    const existe_curso = arregloCarrito.some( curso => curso.id === informacionCurso.id); //true o false
    if(existe_curso){ //true
        //console.log("El curso ya existe");

        //iterar el arreglo para verificar el curso que vamos a actualizar
        arregloCarrito.map(curso => {
            //verificando el id del curso para actualizarlo
            if(curso.id === informacionCurso.id){
                curso.cantidad += 1; //incrementamos en 1 la cantidad
                return curso; //retornamos toda la informacion del curso
            }else{
                return curso; //retornamos toda la informacion de cada curso
            }
        });
    }else{
        arregloCarrito.push(informacionCurso);
    }
    console.table(arregloCarrito);
    //llamamos a la funcion para poner los cursos en la tabla
    carritoHTML();
}

/** metodo donde se va mostrar la informacion del arreglo en la tabla */
function carritoHTML(){

    arregloCarrito.map(curso => {
        //creando el elemento tr
        const fila = document.createElement('tr'); //<tr> <td></td></tr>
        //splice, slice

        //slice => metodo para eliminar un caracter de una cadena
        //$20.00 => 20.00 //double
        let act_precio = curso.precio.slice(1, -1); //eliminamos el primer caracter
        console.log(act_precio);
        //Number() => convierte el tipo de dato a int o double
        const subTotal = Number(act_precio * curso.cantidad);
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>$${subTotal}</td>
            <td>
                <a href="#" class="borrar-item" data-id="${curso.id}">X</a>
            </td>
        `;

        //agregando el elemento tr al html (tbody)
        bodyCarrito.appendChild(fila); //appendChild() = agregamos hijos al contenedor que le indiquemos
    })
}

