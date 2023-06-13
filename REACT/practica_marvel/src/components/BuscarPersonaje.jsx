import axios from 'axios'
import React, { useState } from 'react'

export default function BuscarPersonaje() {
    //asignando 2 estados
    //un estado para todos los personajes y otro estado para un personaje en especifico por su nombre

    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState("");

    const obtenerPersonajeByNombre = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`).then((response) => {
            console.log(response.data.data.results);
            setPersonajes(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        obtenerPersonajeByNombre();
        //cancelamos el evento submit para que no lo vuelva a renderizar
        e.preventDefault();
    }
    console.log(personajes)
    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <h1 className='text-center pt-4'>Encuentra a tu personaje favorito!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Ingresa el nombre del personaje</label>
                    <input type="text" className='form-control' onChange={handleName}/>
                    <button className='btn btn-primary' type='submit'>Ver Personaje</button>
                </form>
                <br />
                {/* apartado del contenido de cada personaje*/}


                {
                    personajes.length === 0 ? (
                        <div class="alert alert-danger" role="alert">
                            No se encontraron resultados
                        </div>
                    ) : (
                        <>
                            {
                                personajes.map((personaje, indice) => {
                                    return(
                                        <div className='p-4'>
                                            <h2 className='text-center'>Hola Soy {personaje.name}</h2>
                                            <div className='row'>
                                                <div className='col-md-4 mt-4'>
                                                    <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt={personaje.name} className='img-fluid'/>
                                                </div>

                                                <div className='col-md-8 mt-4 px-5'>
                                                    <h3 className='text-center'>Comics</h3>
                                                    <ol>
                                                        {
                                                            personaje.comics.items.map((comic, indice) => {
                                                                return (
                                                                    <li>{comic.name}</li>
                                                                )
                                                            })
                                                        }
                                                    </ol>
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
        </div>
    )
}
