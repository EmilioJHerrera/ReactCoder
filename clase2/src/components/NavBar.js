import React from "react";
// import ReactDOM from "react-dom";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import CartWidget from "./CartWidget";
import Combos from "./Combos";

function NavBar(){
return(

<>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Brand id="miMarca" href="#home">HamburguerFactory</Navbar.Brand>
  <CartWidget/>
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



   </>


);
}

export default NavBar;