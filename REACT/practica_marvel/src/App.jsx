import Header from './components/Header'
import './assets/css/style.css'
import Login from './components/Login'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
    console.log(window.location.origin);

    const { isAuthenticated } = useAuth0();
    return (
      <>
      {
        isAuthenticated ? (
          <> 
            <Header />
          </>
        ) : (
          <Login />
        )
      }
      </>
    )
}

export default App
