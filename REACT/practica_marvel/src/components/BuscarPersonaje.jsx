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
            </div>
        </div>
    )
}
