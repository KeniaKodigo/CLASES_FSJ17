import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Comics from './Comics'
import Series from './Series'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/comics" className='link'>Comics</Link>
                        </li>
                        <li>
                            <Link to="/series" className='link'>Series</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* seccion de todas las rutas 
                path = propiedad que asigna el nombre de la ruta para la referencia del hipervinculo
                element = componente en el que se va dirigir la ruta
            */}
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/comics' element={<Comics />}/>
                <Route path='/series' element={<Series />}/>
            </Routes>
        </BrowserRouter>
    )
}
