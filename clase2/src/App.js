import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const datos = {
    titulo : "Te odio REACT!!!! Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo"
}


function App(){
    return(
        <div>
<NavBar/>
<ItemListContainer titulo={datos.titulo}/>
</div>
    );
}

export default App;