import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {

  return (
   <> 

      <Header/>

    <Container>
    <Outlet/>
    </Container>

      <Footer  />
    </>
  )
}

export default App
