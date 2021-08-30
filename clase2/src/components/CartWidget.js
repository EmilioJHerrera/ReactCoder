//DESAFIO crear un icono e insertalo en el navBar
import React from "react";
import ReactDOM from "react-dom";
import imagen from "../imagen/cburger.png"
import "../components/CardWidget.css";

import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";
    // solo devuelvo la imagen, asi que puedo omitir el div 
    // SI USAS DIV HAY QUE MODIFICAR EL padding loco que 
    // se agrega


function CartWidget(){

     // //destructurar contexto
const {carritoCompra, addItem, removeItem, clear,  longitudCompra, numeroItems} = useContext(CartContext);

numeroItems();
return(
    <>
    <img style={{ width:"5%"}} src={imagen} alt="mi logo"/>
    <p className="globo" style={{color:"white"}}>{longitudCompra}</p>
    </>
);
}

export default CartWidget;