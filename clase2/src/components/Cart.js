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


 const Cart = () => {
  
   // //destructurar contexto
const {carritoCompra, addItem, removeItem, clear,  longitudCompra, numeroItems} = useContext(CartContext);

let estaVacio = true;
numeroItems();
(longitudCompra==0) ? (estaVacio=true):(estaVacio=false);
  
   
    return (
        <>
            <h1>mi carrito</h1>
            {(longitudCompra==0) && ( <CartVacio/>)}
{!(longitudCompra==0) &&    carritoCompra.map(producto =>
 <CartItem id= {producto.id} url={producto.url} titulo={producto.titulo} descripcion={producto.descripcion} precio={producto.precio} cantidad={producto.cantidad}/>

        )}
        </>
    );
}

export default Cart;
