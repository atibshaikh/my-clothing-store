import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFIk3TB3T5GC63ddlSuWT5BywPwvQeobk",
    authDomain: "shopmart-7a84c.firebaseapp.com",
    databaseURL: "https://shopmart-7a84c.firebaseio.com",
    projectId: "shopmart-7a84c",
    storageBucket: "shopmart-7a84c.appspot.com",
    messagingSenderId: "413255466476",
    appId: "1:413255466476:web:1b6c6a4f8640ba921e14c9",
    measurementId: "G-LF5TXTNJ30"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup( provider );

  export default firebase;

   