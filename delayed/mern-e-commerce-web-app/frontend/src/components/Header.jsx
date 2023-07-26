import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
  return (
  <header> 



    <Navbar bg="dark"  variant='dark' collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to ='/' > 
        <Navbar.Brand >proShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to ='/cart'> 
            <Nav.Link > <i className='fas fa-shopping-cart'></i> Cart </Nav.Link>
            </LinkContainer>
            <LinkContainer to  ='/signin' >
            <Nav.Link> 
            <i className='fas fa-user'></i> Sign In
             </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header>

  )
}

export default Header 