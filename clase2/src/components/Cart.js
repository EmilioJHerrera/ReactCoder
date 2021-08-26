import React from 'react'
import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";





 const Cart = () => {
  
   // //destructurar contexto
const {carritoCompra, addItem, removeItem, clear} = useContext(CartContext);

   
   
   
   
    return (
        <div>
            <h1>mi carrito</h1>
        
        </div>
    )
}

export default Cart;
