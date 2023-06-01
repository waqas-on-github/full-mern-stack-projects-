import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homescreen from './screens/Homescreen.jsx'
import Prduct from './components/Prduct.jsx'
import Productscreen from './screens/Productscreen.jsx'


const  router = createBrowserRouter ([


{
  path :'/' ,
  element : <App/> , 
  children : [
   {
     path : '/' , 
     element : <Homescreen/>
   }
   , 

   {
    path : 'product/:id' , 
    element : <Productscreen/>
   }

  ]

}



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router } />
  </React.StrictMode>,
)
