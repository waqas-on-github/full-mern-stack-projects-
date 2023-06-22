import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
function App() {
  const state    = useSelector((state ) => state) 
  console.log(state);
  ``  
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
