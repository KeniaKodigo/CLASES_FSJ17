import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Eventos() {
    //declaramos el estado para los eventos
    const [eventos, setEventos] = useState([]);

    const obtenerEventos = () => {
        /* 
            el then hace referencia al exito de la peticion
            el catch hace referencia si hubo un error en la peticion
            crud (get, post, put, delete)
        */
        axios.get("https://gateway.marvel.com/v1/public/events?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f").then((response) => {
            console.log(response);
            setEventos(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        obtenerEventos();
    }, [])

    //console.log(eventos)
    return (
        <div className='container'>
            <h1 className='text-center text-white'>Lista de Eventos</h1>
            <div className='row'>
                {
                    eventos.map((evento, indice) => {
                        return (
                            <div className='col-md-4 mt-4' key={indice}>
                                <div className='card'>
                                    <h5 className='card-header'>{evento.title}</h5>
                                    <div className='card-body'>
                                        <img src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`} alt={evento.title} className='img-fluid'/>

                                        <a href={evento.urls[0].url} className='btn btn-outline-success mt-3' target='_blank'>Ver Mas Detalles</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
