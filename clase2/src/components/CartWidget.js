//DESAFIO crear un icono e insertalo en el navBar
import React from "react";
import ReactDOM from "react-dom";
import imagen from "../imagen/cburger.png"

    // solo devuelvo la imagen, asi que puedo omitir el div 
    // SI USAS DIV HAY QUE MODIFICAR EL padding loco que 
    // se agrega


function CartWidget(){
return(
    <img style={{ width:"5%"}} src={imagen} alt="mi logo"/>
);
}

export default CartWidget;