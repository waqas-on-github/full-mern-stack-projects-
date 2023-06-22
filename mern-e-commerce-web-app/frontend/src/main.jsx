import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homescreen from './screens/Homescreen.jsx'
import Productscreen from './screens/Productscreen.jsx'
import { store } from '../store.js'
import { Provider } from 'react-redux'



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
    path : '/product/:id' , 
    element : <Productscreen/>
   }

  ]

}



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store ={store}> 
    <RouterProvider router ={router } />
</Provider>
  </React.StrictMode>,
)
