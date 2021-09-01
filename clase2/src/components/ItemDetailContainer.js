import React, { useState } from "react"
import {Container, Row, Col} from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
//importar las images
import aros from "../imagen/aros.png"
import clasica from "../imagen/HF_clasica.png"
import fabricar from "../imagen/HF_fabricar.png"
import negra from "../imagen/HF_negra.png"
import papa from "../imagen/HF_papa.png"
//importar la clase css
import "../components/itemDetailContainer.css"
import { useEffect } from "react";
import { getFirestore } from "../firebase";


// const ItemDetailContainer = ({id, titulo , precio, descripcion, url, opcion1, opcion2}) => {

    const ItemDetailContainer = () => {    
    
    //creacion de los hooks
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    //const [itemID, setItemID] = useState("");
    let itemID = "";
    console.log("item", item);
        //tengo el id por el parametro del al URL
    let {params} = useParams();
    console.log( "params", params);
// usa el valor de params para asignar el valor del itemID
    if (params==1){
        itemID= "h5REpohTUjsD0IN6wvQW";
    }
    if (params==2){
        itemID= "SI2NLiKrXajYGlTCoiMA";
    }
    if (params==3){
        itemID= "QNeN8kIxHxlRlwAE0s5I";
    }
            
    if (params==4){
        itemID= "ywHqoBBmiCwQx5oUPN43";
    }
    
    if (params==5){
        itemID= "2wUQF49M01DVqTuQrFoT";
    }

// switch (params) {
//     case 1:
//         itemID= "h5REpohTUjsD0IN6wvQW";
//         break;
//     case 2:
//         itemID= "SI2NLiKrXajYGlTCoiMA";
//         break;
//     case 3:
//         itemID= "QNeN8kIxHxlRlwAE0s5I";
//         console.log("aqui");
//         break;
//     case 4:
//         itemID= "ywHqoBBmiCwQx5oUPN43";
//         break;
//     case 5:
//         itemID= "2wUQF49M01DVqTuQrFoT";
//         break;
// }

    //creo la lista (luego hay que crearla y consumirla por el medio que sea)
    //creacion de la lista de productos
    const listaDetallada =[{
        id:1,titulo:"Papas fritas",descripcion:"Papas fritas de acompañamiento deliciosas", precio:100 , url:papa, opcion1:"papas francesas", opcion2: "papas rusticas"
    },
    {
        id:2,titulo:"Aros de cebolla",descripcion:"12 aros de cebolla de acompañamiento deliciosas", precio:200 , url:aros, opcion1:"aros simples", opcion2:"doble rebozados"
    },
    {
        id:3,titulo:"Hamburguesa Clásica",descripcion:"cheddar y panceta super crujuente", precio:500 ,url:clasica, opcion1:"Pan brioche", opcion2:"pan con semillas de sesámo"
    },
    {
        id:4,titulo:"Hamburguesa Negra",descripcion:"con pan negro de la casa", precio:600 , url:negra, opcion1:"A base de tinta de calamar", opcion2:"A base de colorante artificial"
    },
    {
        id:5,titulo:"Fabricar",descripcion:"Fabricar la hamburgues a eleccion", precio:1000 , url:fabricar, opcion1:"Indicar tus ingredientes", opcion2:"SORPRESA!!!"
    }
    ];

    const detalleProducto = listaDetallada.filter(producto=>producto.id==params);
    console.log(detalleProducto[0]);
    
//crear el efecto nuevo para obtener los datos desde firebase
useEffect(()=> {
//obtengo la lectura de la colección
const db = getFirestore();
const itemCollection = db.collection("Items");
const currentItem = itemCollection.doc(itemID);
itemCollection.get().then(querySnapshot => {
    if (querySnapshot.size ===0){
        console.log("no items");
    }
    setItems(querySnapshot.docs.map(documento => documento.data()))
}).catch(error => console.log(error))

//obtengo la lectura del documento
currentItem.get().then(document=>{
    if(!document.exists){
        console.log("no item");
        return
    }
    setItem({id: document.id, ...document.data()})
})
},[])




    return ( 

<div className="formatoGeneral">

        <Container >
            <Row>
            <Col><img src={detalleProducto[0].url}/></Col> 
            <Col>
            <h3 className="titulote">{detalleProducto[0].titulo}</h3>
            <h4 className="titulos"> Descripcion detallada</h4>
            <p>{detalleProducto[0].descripcion}</p>
            <h4 className="titulos"> Variantes posibles</h4>
            <p>{detalleProducto[0].opcion1}</p>
            <p>{detalleProducto[0].opcion2}</p>
            <h3 className="titulos"> Precio </h3>
            <p>{detalleProducto[0].precio}</p>
    
            
            <ItemCount min={1} max={5} id={detalleProducto[0].id} url={detalleProducto[0].url} titulo={detalleProducto[0].titulo} descripcion={detalleProducto[0].descripcion} precio={detalleProducto[0].precio}     />

            </Col>
            </Row>
        </Container>
    
</div>

     );
}
 
export default ItemDetailContainer;