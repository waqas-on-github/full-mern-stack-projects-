import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import { Signup } from './components/Signup'
import AuthRequired from './components/ProctedRoute'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>} >
            <Route path='products' element={<ProductsScreen/>} />
            <Route path='products/details/:id' element={<DetailsScreen/>} >  </Route>
            <Route path='signup' element ={<Signup/>} />
            <Route path='login'  element= {<Login/>} />
            <Route     element = {<AuthRequired/>}  >
              <Route path='pro' element={<> <h1> proctacted</h1></>} />

            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
