import React from "react"
import {Container, Row, Col} from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
//importar las images
import aros from "../imagen/aros.png"
import clasica from "../imagen/HF_clasica.png"
import fabricar from "../imagen/HF_fabricar.png"
import negra from "../imagen/HF_negra.png"
import papa from "../imagen/HF_papa.png"

// const ItemDetailContainer = ({id, titulo , precio, descripcion, url, opcion1, opcion2}) => {

    const ItemDetailContainer = () => {    
    //tengo el id por el parametro del al URL
    let {params} = useParams();
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
    
    ];

    const detalleProducto = listaDetallada.filter(producto=>producto.id==params);
    console.log(detalleProducto[0]);
    

    return ( 

<>
<Container>
    <Row>
        <Col><img src={detalleProducto[0].url}/></Col> 
        <Col>
        <h3>{detalleProducto[0].titulo}</h3>
        <h4> Descripcion detallada</h4>
        <p>{detalleProducto[0].descripcion}</p>
        <h4> Variantes posibles</h4>
        <p>{detalleProducto[0].opcion1}</p>
        <p>{detalleProducto[0].opcion2}</p>
        <h3> Precio </h3>
        <p>{detalleProducto[0].precio}</p>
        <ItemCount min={1} max={5}/>
        
        </Col>
    </Row>
</Container>

</>

     );
}
 
export default ItemDetailContainer;