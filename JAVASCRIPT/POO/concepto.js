
let coche3 = {
    marca: "HONDA",
    modelo: "HNKLÑ",
    color: "azul",
    precio: 3600
}

let coche2 = {
    marca: "HONDA",
    modelo: "HNKLÑ",
    color: "azul",
    precio: 3600
}

/**
 * clase: es una plantilla o model para describir un objeto
 */
class Coche{
    //atributos
    marca
    modelo
    color
    precio

    //metodos
    acelerar(){
        console.log("Tu coche esta acelerando");
    }

    encender(){
        //code..
    }

    apagar(){
        //code..
    }

}

/** creacion de objetos */

//instancia: Es cuando llamamos a la clase para crear un objeto
let honda = new Coche(); //creamos un nuevo objeto de la clase Coche
honda.acelerar();
honda.marca = "HONDA";
honda.color = "verde";
console.log(honda);

let mustang = new Coche();
mustang.color = "Negro";
console.log(mustang);