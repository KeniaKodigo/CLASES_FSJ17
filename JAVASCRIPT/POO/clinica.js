
class Personas{
    /*** Nivel de acceso: publicos, privados o protegidos 
     * 
     * public: los atributos, metodos yo tengo acceso dentro de la clase, fuera de la clase y clases hijas
     * 
     * protected: solamente tenemos acceso dentro de la clase y claseshijas
     * 
     * private: solamente hay acceso dentro de la clase (#) javascript
    */
    nombre 
    apellido
    edad
    telefono
    direccion
    genero

    //sirve para inicializar el objeto de la clase cuando la instanciamos
    constructor(nombre, apellido, edad, telefono, direccion, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.genero = genero;
    }
    //__construct(), 
}

class Doctor extends Personas{
    especialidad
    correo
    #password //private => set (capturar la informacion), get (retornar la informacion)

    constructor(nombre, apellido, edad, telefono, direccion, genero, especialidad, correo){
        //heredando al constructor padre
        super(nombre, apellido, edad, telefono, direccion, genero) //metodo para heredar constructor padre
        this.especialidad = especialidad;
        this.correo = correo;
    }

    //utilizando set y get para el atributo privado

    //se encarga de capturar el valor
    set capturarPassword(password){
        this.#password = password;
    }

    //se encarga de retornar el valor
    get retornarPassword(){
        return "Tu contraseña para el inicio de sesion es: " + this.#password;
    }

    /*#saludar(){
        return "Mensaje oculto";
    }

    saludo2(){
        this.#saludar();
    }*/

    informacionPersonal(){
        return "Informacion del Doctor <br>Nombre Completo: " + this.nombre + " " + this.apellido + "<br> Edad: " + this.edad + "<br> Telefono: " + this.telefono + "<br> Direccion: " + this.direccion + "<br> Genero: " + this.genero + "<br> Especialidad: " + this.especialidad + "<br> Correo: " + this.correo;
    }
}

let doctor = new Doctor("Juana","Hernandez", 32, 65784912, "San Salvador", "femenino", "Nutricionista", "juanaHer@gmail.com");
document.write(doctor.informacionPersonal());
doctor.capturarPassword = "juana123";
document.write("<br>");
document.write(doctor.retornarPassword);
//persona.#password = 123;
//document.write(persona);

