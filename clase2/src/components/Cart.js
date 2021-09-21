import React from 'react'
import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";

// importar todas las imagenes
import aros from "../imagen/aros.png"
import clasica from "../imagen/HF_clasica.png";
import negra from "../imagen/HF_negra.png"
import papa from "../imagen/HF_papa.png"
import ItemDetailContainer from "./ItemDetailContainer";
import CartItem from './CartItem';
import CartVacio from "./CartVacio";
import CartTotal from './CartTotal';

import {Container, Row, Col } from "react-bootstrap";

 const Cart = () => {
  
   // //destructurar contexto
const {carritoCompra, addItem, removeItem, clear,  longitudCompra, numeroItems} = useContext(CartContext);

let estaVacio = true;
numeroItems();
(longitudCompra==0) ? (estaVacio=true):(estaVacio=false);
  
   
    return (
        <>

<Container>
    <Row>
            <h1>Mi carrito</h1>
<Col>
            {(longitudCompra==0) && ( <CartVacio/>)}
{!(longitudCompra==0) &&    carritoCompra.map(producto =>
 <CartItem id= {producto.id} url={producto.url} titulo={producto.titulo} descripcion={producto.descripcion} precio={producto.precio} cantidad={producto.cantidad}/>

        )}


</Col>
<Col>
        <CartTotal/>

</Col>
    </Row>
</Container>





        </>
    );
}

export default Cart;
