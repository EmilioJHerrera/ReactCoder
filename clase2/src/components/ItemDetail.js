import React , {useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';

// detalle de producto A, utlizar un efecto de montaje, debe llamar a la promesa tardia y en 2s guardar 1 item en un estado propio

// importar todas las imagenes
import aros from "../imagen/aros.png"
import clasica from "../imagen/HF_clasica.png";
import negra from "../imagen/HF_negra.png"
import papa from "../imagen/HF_papa.png"
import ItemDetailContainer from "./ItemDetailContainer";


const ItemDetail = ({identificador}) => {
//creacion del Array de productos detallados
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
    
    ];

    //creacion del state
    
const [datosItem, setdatosItem] = useState("");

//USAR EL USEEFFECT para la ejecución de la promesa tardia
useEffect(() => {
    //los efectos a ejecutar
//desarollo de la promesa Tardia

    const promesaTardia = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
             resolve(listaDetallada);
        },2000)
    });

//llamado a la promesa
    promesaTardia
    .then((result)=>{ setdatosItem(listaDetallada[identificador]);
                console.log(datosItem);})
   }, [])


    return ( 
        <>
    
<ItemDetailContainer id={datosItem.id} titulo={datosItem.titulo} precio={datosItem.precio} descripcion={datosItem.descripcion} url={datosItem.url} opcion1={datosItem.opcion1} opcion2={datosItem.opcion2}/>

    
        </>
     );
}
 



export default ItemDetail;