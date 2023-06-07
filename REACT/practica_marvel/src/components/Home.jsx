import React from 'react'
import marvel from '../assets/img/marvel.png'
import Eventos from './Eventos'

export default function Home() {
    return (
        <main className='bg-dark'>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 text-white'>
                        <h1>Los mejores personajes de marvel!</h1>
                        <h3 className='mt-4'>¡Disfruta del mejor contenido!</h3>
                        <button className='btn btn-primary'>Busca Tu Personaje Favorito</button>
                    </div>
                    <div className='col-md-4'>
                        <img src={marvel} alt="Marvel" className='img-fluid'/>
                    </div>
                </div>
            </section>
            <Eventos />
        </main>
    )
}

