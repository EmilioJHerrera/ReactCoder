// Incluye aquí el rendering de algún texto o título 
// provisional que luego reemplazaremos por nuestro 
//catálogo. 
//Impórtalo dentro de App.js, y abajo de NavBar.js. 


import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Imagen from "../imagen/hero.png"
import "../components/ItemListContainer.css"

function ItemListContainer({titulo}){
    return(
<div>
<Container className="containerHero">
  <Row>
    <Col className="miTitulo">{titulo}</Col>
    <Col><img style={{width:"100%"}} src={Imagen} alt="mi prueba"/></Col>
  </Row>
  </Container>
</div>
    );
}

export default ItemListContainer;


