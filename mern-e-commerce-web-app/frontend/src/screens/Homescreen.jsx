import Prduct from '../components/Prduct.jsx'
import  products from '../products.js'    
import {Row , Col } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Homescreen = () => {
  const [product , setproduct] =useState([])
  
  useEffect(() => {
  
    const getproduct  = async () => {
        
      const products = await axios.get('api/products')
      setproduct(products.data)
      
      
    }
   getproduct()
  
  } , [])
  return (
    <>
     <h1>Leates Products </h1>

     <Row>
      {product.map((product) => (

          <Col sm={12} md={6}  lg ={4} xl={3}  key={product._id}  > 
           <Prduct product ={product}  />
           
          </Col>      
           
          
          ))}
    </Row>
      
      </>

      )
    }
    
    export default Homescreen