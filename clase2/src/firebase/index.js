import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDUlsttMRgP8qXKUVwzixYGOZmpjmPCy4M",
    authDomain: "react-coderhouse-eh.firebaseapp.com",
    projectId: "react-coderhouse-eh",
    storageBucket: "react-coderhouse-eh.appspot.com",
    messagingSenderId: "289982617893",
    appId: "1:289982617893:web:c605489fec8e45b63ba2cc"
})

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);