import firebase from "firebase/compat/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDUlsttMRgP8qXKUVwzixYGOZmpjmPCy4M",
    authDomain: "react-coderhouse-eh.firebaseapp.com",
    projectId: "react-coderhouse-eh",
    storageBucket: "react-coderhouse-eh.appspot.com",
    messagingSenderId: "289982617893",
    appId: "1:289982617893:web:c605489fec8e45b63ba2cc"
})

export const googleProvider =() => {
    const provider = new GoogleAuthProvider();
    console.log(provider)
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
  }
  
export const googleSignInPopup = (provider) => {
    const auth = getAuth();
    console.log(auth)
    signInWithPopup(auth, provider)
      .then((result) => {
          console.log("result",result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        console.log("error",error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  
