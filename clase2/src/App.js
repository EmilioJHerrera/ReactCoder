import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import Combos from "./components/Combos";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";




function App(){

    const datos = {
        titulo : "Te odio REACT!!!! Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo"
    }
    
    return(
        <div>
<NavBar/>
{/* <ItemListContainer titulo={datos.titulo}/> */}
{/* <Home titulo={datos.titulo}/> */}
</div>
    );
}

export default App;