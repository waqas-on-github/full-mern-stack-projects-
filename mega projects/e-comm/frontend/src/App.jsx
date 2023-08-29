import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/routes/Nav'
import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import { Signup } from './components/users/Signup'
import AuthRequired from './components/routes/ProctedRoute'
import Login from './components/users/Login'
import Adminroute from './components/routes/Adminroute'
import Modirator from './components/routes/ModiratorRoute'
import Profile from './components/users/Profile'
import Productuploadscreen from './screens/Productuploadscreen'
import CartScreen from './screens/CartScreen'
import Deleteproduct from './components/products/admin/Deleteproduct'
import Dashboard from './components/Admin/Dashboard'
import ProductInfo from './components/products/admin/ProductInfo'
import Address from './components/address/Address'
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
            <Route path='cart' element ={<CartScreen/>} />

            <Route  element = {<AuthRequired/>}  >
              <Route path='profile' element ={<Profile/>}/>
              <Route path= "address"  element={<Address/>}/>
            </Route>

          <Route element={<Adminroute/>} >
              <Route path='dashboard' element= {<Dashboard/>} > 

                 <Route path='upload' element= {<Productuploadscreen/>} />
                 <Route path='manage' element ={<Deleteproduct/>} /> 
                 <Route  path ='productInfo/:id'  element = {<ProductInfo/>}/>
                 {/* todo complete this later  */}

              </Route>
              
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
