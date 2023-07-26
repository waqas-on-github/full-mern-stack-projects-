import { Link } from "react-router-dom";
import { Image, Row, Col, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Ratings";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";


const Productscreen = () => {
  const params = useParams();

  const [product , setproduct] =useState([])
  
  useEffect(() => {
  
    const getproduct  = async () => {
        
      const products = await axios.get(`/api/products/${params.id}`)   
      setproduct(products.data)
      
      
    }
   getproduct()
  
  } , [])

  return (
    <div style={{minHeight : '80vh'}} >
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product?.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-black" type="button" disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Productscreen;
