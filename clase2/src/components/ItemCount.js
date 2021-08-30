import React, {useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import "../components/ItemCount.css"
import { useHistory } from "react-router-dom";
import MyCartProvider, { CartContext } from "../context/cartContext";
import {useContext} from "react";
//funcion recibe props de minimos y maximos
//desestructurar en lugar de usar props en los argumentos de la funcion 

function ItemCount({min,max,id, url,titulo,descripcion,precio}){
    
    // //destructurar contexto
    const {carritoCompra, addItem, removeItem, clear} = useContext(CartContext);
    
    //console.log(addItem);
    
    //hook de estado inicial
    const [cantidad, setCantidad] = useState(0);
    const [mensaje, setMensaje] = useState("");
    
    //Hook para enviar al carrito
    const [enviarCarrito, setenviarCarrito] = useState(0); //envia cantidad al carrito
    const [finalizarCompra, setfinalizarCompra] = useState(false); //bandera para mostrar o ocultar botones
    
    //valores iniciales
    // const min = 1;
    // const max = 3;
    
    //funciones que modifican el hook y entregar el set
    // console.log(newItem);
    console.log("cantidad:", cantidad);
    console.log("carritoCompra",carritoCompra);
    
    
    const validarMaximo = (max) =>{
        (cantidad<= (max-1))? setCantidad(cantidad +1): alert("maximo alcanzado")
    }
const validarMinimo = (min) =>{
    (cantidad>=(min+1))? setCantidad(cantidad-1) : alert("llegaste al min")
}

const agregarCarrito =() =>{
    
    
    //console.log(evt)
    
     setMensaje(`enviado ${cantidad} al carrito...`);
    //  console.log(setMensaje);
    //  setenviarCarrito(enviarCarrito + cantidad);
    //  console.log("enviarcarrito:", enviarCarrito);
    //  console.log("descripcion:",descripcion);
    
     const newItem = {id,url,titulo,descripcion,precio, cantidad};
     addItem(newItem);
     setfinalizarCompra(true);
     
}



//manejar la navegacion para ir a mi carrito
const history = useHistory();
  const handleNavigation = () => {
    history.push(`/Cart`);
  };



// espacio para retornar el resultado
return(
<div >
    <h5>Cantidad</h5>
        <div className="miEstilo">
            <button className="boton" onClick={ ()=> validarMaximo(max)}>+</button>
            <p>{cantidad}</p>
            <button className="boton" onClick={ ()=> validarMinimo(min)} >-</button>
            
    
    
    {!finalizarCompra && ( <button onClick= {()=> agregarCarrito()}>Agregar a carrito</button> )}


    {finalizarCompra && (<button onClick={()=>handleNavigation()} >Comprar </button>)}
        </div>
    <p>{mensaje}</p>
</div>
)

};

export default ItemCount;


