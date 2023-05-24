import React  from 'react'
import ReactDOM from 'react-dom/client'
import Home from  './screens/Home'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';


// redux steup 
import {store} from '../store'
import { Provider } from 'react-redux'


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from './screens/Loginscreen'
import RegisterScreen from './screens/Registerscreen'

const router = createBrowserRouter([
  {
    path :'/' , 
    element: <App/>
    ,children : [
        { path : '/' ,
         element: <Home/>
        }, 
        {
          path: 'login' , 
          element : <LoginScreen/>
        },
        {
          path:'register',
          element:<RegisterScreen/>
        }

    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store} >

   <RouterProvider router ={router} />


 </Provider>

  </React.StrictMode>,
)
