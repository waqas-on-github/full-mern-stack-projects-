import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripepromise = loadStripe("pk_test_51NWwK8FyZm3o9pq0IePIN9Ondla2Pwx0U08EexUMOXt6jLdCVOQmHNcxXhrwTZzbVUwL22GGu1oq0VYmOtwIkXeT00GXMwi98T")


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Elements stripe={stripepromise} > 
    <App />

</Elements>
  </React.StrictMode>,  
)
