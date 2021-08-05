import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import "../components/ItemCount.css"
function ItemCount(){
  
//hook de estado inicial
const [cantidad, setCantidad] = useState(0);
const [mensaje, setMensaje] = useState("");

//valores iniciales
const min = 1;
const max = 3;

//funciones que modifican el hook y entregar el set
const validarMaximo = (max) =>{
    (cantidad<= (max-1))? setCantidad(cantidad +1): alert("maximo alcanzado")
}
const validarMinimo = (min) =>{
    (cantidad>=(min+1))? setCantidad(cantidad-1) : alert("llegaste al min")
}

const agregarCarrito =() =>{
     setMensaje(`enviado ${cantidad} al carrito...`);
     
}


// espacio para retornar el resultado
return(
<div >
    <h3>contador de productos</h3>
<button className="boton" onClick={ ()=> validarMaximo(max)}>+</button>
<p>{cantidad}</p>
<button className="boton" onClick={ ()=> validarMinimo(min)} >-</button>
<button onClick= {()=> agregarCarrito()}>Agregar a carrito</button>
<p>{mensaje}</p>
</div>
)

};

export default ItemCount;


