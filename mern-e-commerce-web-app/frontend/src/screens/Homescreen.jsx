import Prduct from '../components/Prduct.jsx'
import  products from '../products.js'    
import {Row , Col } from 'react-bootstrap'


const Homescreen = () => {
      return (
      <>
     <h1>Leates Products </h1>

     <Row>
      {products.map((product) => (

          <Col sm={12} md={6}  lg ={4} xl={3}  key={product._id}  > 
           <Prduct product ={product}  />
           
          </Col>      
           
          
          ))}
    </Row>
      
      </>

      )
    }
    
    export default Homescreen