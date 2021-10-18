import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBVNWoPRhw0wd25g5_FhOncp5ZW24yPX00",
    authDomain: "chat-app-d46be.firebaseapp.com",
    projectId: "chat-app-d46be",
    storageBucket: "chat-app-d46be.appspot.com",
    messagingSenderId: "888945881468",
    appId: "1:888945881468:web:47bd230a61f619e32cf4f9",
    measurementId: "G-GJCMVYRH41"
};


let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
