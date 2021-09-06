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
    items: "ingresar datos de los items de la compra",
    total : totalCompra,
    cantidad : longitudCompra
}

const db = getFirestore();
const ordenes = db.collection("ordenes");
ordenes
.add(orden)
.then((response) => {
console.log(response);
})
.catch((error)=> console.log(error));

}
    return (
        <div>
            <h1>TOTAL:{totalCompra}</h1>
            <h2>Cantidad:{longitudCompra}</h2>
            <button onClick={()=> handleEscribirOrden()}>enviar orden a firebase</button>
        </div>
    )
}

export default CartTotal;
