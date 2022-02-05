import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA7vqtxES9Se1xMZAJndS7ZYy4O2bm1cI",

  authDomain: "blog-hooks-99aca.firebaseapp.com",

  projectId: "blog-hooks-99aca",

  storageBucket: "blog-hooks-99aca.appspot.com",

  messagingSenderId: "836726604405",

  appId: "1:836726604405:web:01b515f806408a256c2e3c"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore =  firebase.firestore() ;
