//importando el css
import './assets/css/style.css'
//importando un componente
import Menu from './Menu'
import Lista from './components/Lista';

function App() {
  const nombre = "Kenia Paiz";
  return (
    //siempre tiene que haber un contenedor padre
    <>
        <Menu />
        <h1>Bienvenido {nombre} a mi primera practica </h1>
        <p>Estamos trabajando con react</p>

        <div className='container'>
          <Lista />
        </div>
        
    </>
  )
}

export default App
