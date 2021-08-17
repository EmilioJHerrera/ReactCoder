import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Imagen from "../imagen/hero.png"
import "../components/ItemListContainer.css"




const Home = ({titulo})=> {

return(
 <>
 <div className="containerHero">

 
 <Container >
  <Row>
    {/* <Col className="miTitulo">{titulo}</Col> */}
    <Col className="miTitulo">Mira nuestras hamburguesas de autor o prueba creado tus propias combinaciones.</Col>
    <Col><img style={{width:"100%"}} src={Imagen} alt="mi prueba"/></Col>
  </Row>
  </Container>
  
  
  
 
  
  
  
  </div>
 </>   
);

}

export default Home;