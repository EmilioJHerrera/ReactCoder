import React from "react";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
//importar el css general
import "../components/itemDetailContainer.css"

const ListaProductos = () => {
    return ( 
<div className="formatoGeneral">
        <h2 className="titulote">Lista de productos</h2>
<ItemList/>
{/* <ItemDetail identificador={3}/> */}
</div>
    );
       
}
 
export default ListaProductos;