import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Eventos() {
    //declaramos el estado para los eventos
    const [eventos, setEventos] = useState([]);

    const obtenerEventos = () => {
        /* 
            el then hace referencia al exito de la peticion
            el catch hace referencia si hubo un error en la peticion
        */
        axios.get("https://gateway.marvel.com/v1/public/events?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f").then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        obtenerEventos();
    }, [])

    return (
        <div>Eventos</div>
    )
}
