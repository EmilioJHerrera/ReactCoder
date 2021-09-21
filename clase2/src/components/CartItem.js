import React from 'react'

import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";
import CartTotal from './CartTotal';



function CartItem({ id, url,titulo, descripcion, precio, cantidad}) {
   
    // //destructurar contexto
const {carritoCompra, addItem, removeItem, clear, longitudCompra, numeroItems} = useContext(CartContext);




   
    return (
       <>




       <div>
           <img src={url} style={{width :"10%"}}/>
        </div>
        <div>
        <p>descripcion:{titulo}</p>
        <p>descripcion:{descripcion}</p>
        <p>precio:{precio}</p>
        <p>cantidad:{cantidad}</p>
        </div>
        <div>
        <button onClick={()=>removeItem(id)}>Remover item</button> 
        <button onClick={()=>clear()}>Vaciar carrito</button>   
        </div> 
         
        
        
        
        </>


    )
}

export default CartItem
