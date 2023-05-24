/**
 * Herencia de dinero
 * abuelo, papa, hijo
 */

class Abuelo{
    //atributo
    dinero_abuelo = 8200; //tipo undefined

    //metodo
    obtenerHerenciaAbuelo(){
        //this.dinero_abuelo = 8200;
        return "El abuelo tiene $" + this.dinero_abuelo;
    }
}

//palabra reservada = extends
class Papa extends Abuelo{
    //atributo
    dinero_papa

    obtenerHerenciaPapa(dinero){
        this.dinero_papa = dinero + this.dinero_abuelo;
        return "El papa tiene $" + this.dinero_papa;
    }
}

class Hijo extends Papa{
    dinero_hijo

    obtenerHerenciaHijo(dinero){
        this.dinero_hijo = dinero + this.dinero_papa;
        return "El hijo tiene $" + this.dinero_hijo;
    }
}

//instanciando las clases
let abuelo = new Abuelo();
abuelo.dinero_abuelo = 5000;
console.log(abuelo);
console.log(abuelo.obtenerHerenciaAbuelo());


let papa = new Papa();
papa.dinero_abuelo = 6000;
console.log(papa.obtenerHerenciaPapa(2000));

let hijo = new Hijo();
//hijo.dinero_abuelo = 500;
hijo.obtenerHerenciaAbuelo(1500);
hijo.obtenerHerenciaPapa(1300);
console.log(hijo.obtenerHerenciaHijo(500)); //3300

