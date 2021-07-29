import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

function NavBar (){
return(
  
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand id="miMarca" href="#home">HamburguerFactory</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto letraGeneral">
      <Nav.Link href="#features">Productos</Nav.Link>
      {/* <Nav.Link href="#pricing">Precios</Nav.Link> */}
      <NavDropdown title="Precios" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Combos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Fabricar</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
   </div>


);
}

export default NavBar;