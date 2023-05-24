
class Animal{
    nombre
    edad
    genero
    raza

    hacerSonido(){
        return "Todos los animales hacen sonido";
    }
}

//clase abstractas => solo heredan, no se pueden instanciar
/*abstract class Animal{
    //metodos abstractos
    hacerSonido(); //metodo sin comportamiento del padre, las clases hijas definen el comportamiento
}*/

class Gato extends Animal{
    //polimorfismo: sobreescribir el metodo para cambiar su comportamiento

    hacerSonido(){
        return "Los gatos hacen miau miau";
    }
}

let gato = new Gato();
document.write(gato.hacerSonido());