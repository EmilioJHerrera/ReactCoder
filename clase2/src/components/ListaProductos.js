import React from "react";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const ListaProductos = () => {
    return ( 
<>
        <h2>Lista de productos</h2>
<ItemList/>
{/* <ItemDetail identificador={3}/> */}
</>
    );
       
}
 
export default ListaProductos;