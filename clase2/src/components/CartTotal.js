import React from 'react'

import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";


function CartTotal() {

// //destructurar contexto
const { obtenerPrecio, totalCompra, carritoCompra, addItem, removeItem, clear, longitudCompra, numeroItems} = useContext(CartContext);



obtenerPrecio();
numeroItems();
    return (
        <div>
            <h1>TOTAL:{totalCompra}</h1>
            <h2>Cantidad:{longitudCompra}</h2>
        </div>
    )
}

export default CartTotal;
