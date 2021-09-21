import React from 'react'

import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";

import { getFirestore } from "../firebase";


function CartTotal() {

// //destructurar contexto
const { obtenerPrecio, totalCompra, carritoCompra, addItem, removeItem, clear, longitudCompra, numeroItems} = useContext(CartContext);



obtenerPrecio();
numeroItems();


const handleEscribirOrden =() =>{
const orden = {
    comprador:{ nombre : "Emilio", telefono : "09001728888", correo: "micorreo@correo.com"},
    items: carritoCompra,
    total : totalCompra,
    cantidad : longitudCompra
}

const db = getFirestore();
const ordenes = db.collection("ordenes");
ordenes
.add(orden)
.then((response) => {
console.log(response);
alert("En la consola se puede apreciar el ID del objeto creado en firebase =D");
})
.catch((error)=> console.log(error));

}
    return (
        <div>
            <h1>TOTAL:{totalCompra}</h1>
            <h2>Número de items en el carrito: {longitudCompra}</h2>
            <button onClick={()=> handleEscribirOrden()}>enviar orden a firebase</button>
        </div>
    )
}

export default CartTotal;
