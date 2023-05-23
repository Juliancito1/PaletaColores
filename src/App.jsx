import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
    <Container className='my-5 paginaPrincipal'>
    <Formulario></Formulario>
    </Container>
      <footer className='bg-dark text-light py-4 text-center'>
          <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App
