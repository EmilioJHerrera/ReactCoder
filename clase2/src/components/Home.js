import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Imagen from "../imagen/hero.png"
import "../components/ItemListContainer.css"

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { googleProvider, googleSignInPopup, getFirebase } from "../firebase/google_auth";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/compat/auth";




const Home = ({titulo})=> {



// const login = () => {
//   let defaultAuth = firebase.auth();
//   console.log(defaultAuth)
//   let provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('profile');
// provider.addScope('email');
// console.log("provider", provider)
//   firebase.auth.signInWithRedirect(provider).then(result=>{
//     console.log(result);
//   })
// }



return(
 <>
 <div className="containerHero">

 
 <Container >
  <Row>
    {/* <Col className="miTitulo">{titulo}</Col> */}
    <Col className="miTitulo">Mira nuestras hamburguesas de autor o prueba creado tus propias combinaciones.</Col>
    <Col><img style={{width:"100%"}} src={Imagen} alt="mi prueba"/>
        {/* <button onClick={()=>login()}>
          Login with Google
        </button> */}
    </Col>
  </Row>
  </Container>
  
  
  
 
  
  
  
  </div>
 </>   
);

}

export default Home;