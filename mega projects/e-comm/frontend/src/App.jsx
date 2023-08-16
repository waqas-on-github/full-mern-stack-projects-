import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import { Signup } from './components/Signup'
import AuthRequired from './components/ProctedRoute'
import Login from './components/Login'
import Adminroute from './components/Adminroute'
import Modirator from './components/ModiratorRoute'
import Profile from './components/Profile'
import Productuploadscreen from './screens/Productuploadscreen'

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
            <Route  element = {<AuthRequired/>}  >
              <Route path='pro' element={<> <h1> proctacted</h1></>} />
              <Route path='profile' element ={<Profile/>}/>
            </Route>

          <Route element={<Adminroute/>} >
           <Route path='upload' element= {<Productuploadscreen/>} />
          </Route>

         <Route element={<Modirator/>} >
            <Route path = "edit" element ={<h1> edit product</h1>} />

         </Route>



          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
