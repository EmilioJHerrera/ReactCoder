import React from "react";
import {Card,Button} from "react-bootstrap";
import ItemCount from "./ItemCount";

import { useParams, useHistory } from "react-router-dom";

import "../components/itemDetailContainer.css"

function Item({id,titulo, descripcion, precio,url}){

  // let {params} = useParams();
  const history = useHistory();
  const handleNavigation = (id) => {
    history.push(`/Item/${id}`);
  };





return(
// lo inserto por fragment para luego darle orden un gridSystem
<>
<Card style={{ width: '18rem' }} className="formatoGeneral">
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>
      {descripcion/* Some quick example text to build on the card title and make up the bulk of
      the card's content. */}
    </Card.Text>
    <Card.Text>${precio}</Card.Text>
    
    {/* luego se puede modificar los valores de maximos y minimos para cada producto */}
{/* 
    <ItemCount min={1} max={5}/>
 */}

{/* debo agregar el boton que pase el id */}
<button onClick={()=>handleNavigation(id)}>ver detalles</button>
  </Card.Body>
</Card>
</>

)


};

export default Item;