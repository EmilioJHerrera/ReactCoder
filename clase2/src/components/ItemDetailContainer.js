import React from "react"
import {Container, Row, Col} from 'react-bootstrap';


const ItemDetailContainer = ({id, titulo , precio, descripcion, url, opcion1, opcion2}) => {
    return ( 

<>
<Container>
    <Row>
        <Col><img src={url}/></Col> 
        <Col>
        <h3>{titulo}</h3>
        <h4> Descripcion detallada</h4>
        <p>{descripcion}</p>
        <h4> Variantes posibles</h4>
        <p>{opcion1}</p>
        <p>{opcion2}</p>
        <h3> Precio </h3>
        <p>{precio}</p>
        
        </Col>
    </Row>
</Container>

</>

     );
}
 
export default ItemDetailContainer;