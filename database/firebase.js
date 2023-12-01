import firebase from 'firebase/firestore'
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSz8snFtrX7cntVPyO9DDeyo4ubRMF7Tk",
    authDomain: "autenticacion-39574.firebaseapp.com",
    projectId: "autenticacion-39574",
    storageBucket: "autenticacion-39574.appspot.com",
    messagingSenderId: "61978905749",
    appId: "1:61978905749:web:a7ec5ecf4af3c3d99edf9c"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
    firebase,
    db
}