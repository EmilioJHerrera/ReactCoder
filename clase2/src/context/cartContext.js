import React , { createContext } from "react";
import { useState } from "react";

 export const CartContext = createContext([]);

  function MyCartProvider({defaultValue = [], children}) {

    const [carritoCompra, setcarritoCompra] = useState([]);
    
    const [longitudCompra, setlongitudCompra] =useState(0);
    
    const [totalCompra, settotalCompra] = useState(0);
    

    const obtenerPrecio = ()=> {
        let total= 0;
        carritoCompra.forEach(elemento => {
            total += (elemento.cantidad)*(elemento.precio); 
        return total;
        });
        settotalCompra(total);
        }

    const numeroItems = ()=> {
    setlongitudCompra(carritoCompra.length);
    }

    const addItem = (item)=>{
        const nuevoItemCarrito = [...carritoCompra, item];
        setcarritoCompra(nuevoItemCarrito);
    }

    const removeItem = (id) =>{
        const actualizaCarrito = carritoCompra.filter(producto => producto.id !== id);
        setcarritoCompra(actualizaCarrito);
    }

    const clear = () => {
        setcarritoCompra([]);
    }

    const isInCart= (id) =>{
    
        const repetido = carritoCompra.indexOf(carritoCompra.id);
if(repetido== 0){
    return true
}else{
    return false
}

    }
    
return(
<CartContext.Provider value={{carritoCompra, addItem, removeItem, clear, longitudCompra, numeroItems, obtenerPrecio, totalCompra}}>
    {children}
</CartContext.Provider>
);

 }

 export default MyCartProvider;