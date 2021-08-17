import React from "react";
// import ReactDOM from "react-dom";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import CartWidget from "./CartWidget";
import Combos from "./Combos";
import ListaProductos from "./ListaProductos";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Pag404 from "./Pag404";
import Item from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";
function NavBar(){
return(

<>
<Router>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Brand id="miMarca"><NavLink exact to="/">HamburguerFactory</NavLink></Navbar.Brand>
  <CartWidget/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto letraGeneral">
      <Nav.Link> <NavLink exact to="/ListaProductos">Productos</NavLink></Nav.Link>
      {/* <Nav.Link href="#pricing">Precios</Nav.Link> */}
      <NavDropdown title="Precios" id="collasible-nav-dropdown">
        <NavDropdown.Item ><NavLink exact to="/Combos">Combos</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Fabricar</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

        <Switch>
        
        <Route path="/Item/:params">
        <ItemDetailContainer/>
      </Route>
          <Route path="/ListaProductos">
            <ListaProductos />
          </Route>
       
          <Route path="/Combos">
            <Combos />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Pag404 />
          </Route>
          <Route path="/Item/:params">
        <ItemDetailContainer/>
      </Route>
        </Switch>

</Router>

   </>


);
}

export default NavBar;