import React from 'react'
import { useHistory } from "react-router-dom";

function CartVacio() {
   
   //manejar la navegacion para ir a mi carrito
const history = useHistory();
const handleNavigation = () => {
  history.push(`/ListaProductos`);
};

   
   
    return (
        <div>
            <h2>El carrito esta vacío, intente comprar algo</h2>
            <button onClick={()=>handleNavigation()} >Comprar </button>
        </div>
    )
}

export default CartVacio;