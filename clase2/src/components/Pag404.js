import React from "react";
import image404 from "../imagen/404.png"
import "../components/pag404.css"



const Pag404 = () => {

return(
<>
<div className="pag404">
<img className="pag404Img"src={image404}/>
<h1 className="pag404Text">Oops, no queremos que veas esto. Intenta ir al inicio</h1>
</div>
</>

);
}

export default Pag404;