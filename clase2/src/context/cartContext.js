import React , { createContext } from "react";
import { useState } from "react";

 export const CartContext = createContext([]);

  function MyCartProvider({defaultValue = [], children}) {

    const [carritoCompra, setcarritoCompra] = useState([]);
    
    
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

    
return(
<CartContext.Provider value={{carritoCompra, addItem, removeItem, clear}}>
    {children}
</CartContext.Provider>
);

 }

 export default MyCartProvider;