import React, {useState} from "react";
import {Container} from 'react-bootstrap';
import "../components/ItemCount.css"

//funcion recibe props de minimos y maximos
//desestructurar en lugar de usar props en los argumentos de la funcion 

function ItemCount({min,max}){
  
//hook de estado inicial
const [cantidad, setCantidad] = useState(0);
const [mensaje, setMensaje] = useState("");

//valores iniciales
// const min = 1;
// const max = 3;

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
    <h5>Cantidad</h5>
<div className="miEstilo">
<button className="boton" onClick={ ()=> validarMaximo(max)}>+</button>
<p>{cantidad}</p>
<button className="boton" onClick={ ()=> validarMinimo(min)} >-</button>
<button onClick= {()=> agregarCarrito()}>Agregar a carrito</button>
</div>
<p>{mensaje}</p>
</div>
)

};

export default ItemCount;


