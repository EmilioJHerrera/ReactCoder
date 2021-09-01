import React , {useEffect, useState} from "react";
import Item from "./Item";
import "./ItemList.css";
// importar todas las imagenes
import aros from "../imagen/aros.png"
import clasica from "../imagen/HF_clasica.png"
import fabricar from "../imagen/HF_fabricar.png"
import negra from "../imagen/HF_negra.png"
import papa from "../imagen/HF_papa.png"
import { getFirestore } from "../firebase";
import { onSnapshot, QuerySnapshot } from "firebase/firestore";



function ItemList (){

    //creacion de la lista de productos
    // const listaProductos =[{
    //     id:1,titulo:"Papas fritas",descripcion:"Papas fritas de acompañamiento", precio:100 , url:papa
    // },
    // {
    //     id:2,titulo:"Aros de cebolla",descripcion:"12 aros de cebolla de acompañamiento", precio:200 , url:aros
    // },
    // {
    //     id:3,titulo:"Hamburguesa Clásica",descripcion:"cheddar y panceta", precio:500 , url:clasica
    // },
    // {
    //     id:4,titulo:"Hamburguesa Negra",descripcion:"con pan negro", precio:600 , url:negra
    // },
    // {
    //     id:5,titulo:"Fabrica",descripcion:"selecciona tus ingredientes y disfruta", precio:1000 , url:fabricar
    // },
    // ];

// codigo de la promesa

// const promesa =()=> new Promise((resolve, reject)=>
// {
// setTimeout(()=>{resolve(listaProductos)},2000);
// });

// promesa()
// .then(
//     (result)=>{console.log(result)},
//     (err)=> console.log(err)
//     )
// .finally(
//     ()=>{console.log("finalizo la promesa");}
// );

const [items, setItems] = useState([]);
console.log("Items", items);
let clone = {...items}
console.log("clone", clone);
let prueba1 = {...clone[0]};
let prueba2 = {...clone[1]};
let prueba3 = {...clone[2]};
let prueba4 = {...clone[3]};
let prueba5 = {...clone[4]};
let final = [prueba1, prueba2, prueba3, prueba4, prueba5]
const listaProductos= final
console.log(final)
console.log ("lP",listaProductos)


useEffect(() => {
    
    const db = getFirestore();
    const itemCollection = db.collection("Items");

    itemCollection.get().then(querySnapshot => {
        if (querySnapshot.size=== 0){
            console.log("no items");
        }
        setItems(querySnapshot.docs.map(documento => documento.data()))
    }).catch(error => console.log (error))
}, [])






 return(
     <>
     {/* <h1 >LISTA DE PRODUCTOS</h1> */}
     <div className="estiloList">
{listaProductos.map(producto=>
    <Item id={producto.id} titulo={producto.titulo} descripcion={producto.descripcion} precio={producto.precio} url={producto.url}/>
    )}
    </div>
</>
 );
 }

export default ItemList;