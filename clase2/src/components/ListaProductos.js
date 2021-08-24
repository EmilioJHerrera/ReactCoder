import React from "react";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
//importar el css general
import "../components/itemDetailContainer.css"
import  MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";
const ListaProductos = () => {

    console.log(useContext(CartContext));

    return ( 
<div className="formatoGeneral">
        <h2 className="titulote">Lista de productos</h2>
<ItemList/>
{/* <ItemDetail identificador={3}/> */}
</div>
    );
       
}
 
export default ListaProductos;