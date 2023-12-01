// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSz8snFtrX7cntVPyO9DDeyo4ubRMF7Tk",
  authDomain: "autenticacion-39574.firebaseapp.com",
  projectId: "autenticacion-39574",
  storageBucket: "autenticacion-39574.appspot.com",
  messagingSenderId: "61978905749",
  appId: "1:61978905749:web:a7ec5ecf4af3c3d99edf9c"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

