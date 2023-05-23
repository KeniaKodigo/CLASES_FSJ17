
class Estudiante{
    //atributos
    nombre//string
    apellido
    telefono //int
    edad //int
    notas//[tarea, tarea, tra]
    direccion //string
    materias

    //metodos
    evaluarNotas(){
        //code..
        //let notas = 0;
        let nota_global = 10;
        /** el this hace referencia o llamado a los atributos y metodos de la clase */
        if(this.notas > 7){
            console.log(this.nombre + " Aprobaste el curso");
        }else{
            console.log(this.nombre + "No aprobaste :(");
        }
    }

    agregarMaterias(){
        //code..
        this.evaluarNotas();

    }
}

//instanciando la clase
let ignacio = new Estudiante();
ignacio.nombre = "Ignacio";
ignacio.direccion = "San Miguel";
ignacio.telefono = 6578945;
ignacio.notas = 5.4;
ignacio.evaluarNotas();
console.log(ignacio);

let rafa = new Estudiante();
rafa.nombre = "Rafael";
rafa.direccion = "San Salvador";
rafa.telefono = 75849;
rafa.notas = 7.2;
rafa.evaluarNotas();
