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

/** asignacion de variables */

const carrito = document.getElementById('carrito'); /** llamando al elemento del html */
console.log(carrito);

const titulo = document.querySelector('h1');
/** sacando el contenido del h1 (texto) */
console.log(titulo.textContent); //textContent, value

