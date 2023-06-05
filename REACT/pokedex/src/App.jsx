import ListaPokes from './components/ListaPokes'
import './assets/css/style.css'
import Encabezado from './components/Encabezado'

function App() {
  
    return (
      <>
        <Encabezado />
        <div className='container'>
          <ListaPokes />
        </div>
        
      </>
    )
}

export default App
