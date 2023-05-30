import React, { useState } from 'react'
import data from './data.json'

export default function Lista() {
    /* manejando el hook useState */

    //el estado almacena y actualiza la informacion del componente
    /* 
        posicion 0 = asignamos como va empezar el estado y guarda la actualizacion del estado para retornarlo

        posicion 1 = se encarga de actualizar el estado

        contador = 0 => 10
        setContador = 10
    */
    const [personas, setPersonas] = useState(data);
    console.log(personas);

    return (
        <div className='row'>
            <h1 className='text-center'>Lista de Usuarios</h1>
            {
                //condicionamos si el estado devuelve un arreglo vacio o devuelve el json
                personas.length === 0 ? (
                    <button className='btn btn-primary' onClick={ () => setPersonas(data)}>Recuperar Lista</button>
                ) : (
                    <>
                        <button className='btn btn-danger' onClick={ () => setPersonas([])}>Eliminar Lista</button>
                    {
                        personas.map((persona, indice) => {
                            return (
                                <div className='col-md-4 mt-4' key={indice}>
                                    <div className="card">
                                        <img src={persona.imagen} className="card-img-top" alt={persona.nombre} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{persona.nombre}</h5>
                                            <p className="card-text">
                                                Hola! Tengo {persona.edad} años de edad.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </>
                )
            }
            

            

        </div>
    )
}
