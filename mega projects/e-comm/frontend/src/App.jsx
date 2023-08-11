import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import { Signup } from './components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>} >
            <Route path='/products' element={<ProductsScreen/>} />
            <Route path='/products/details/:id' element={<DetailsScreen/>} >  </Route>
            <Route path='/signup' element ={<Signup/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
