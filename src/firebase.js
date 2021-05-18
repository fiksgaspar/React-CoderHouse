import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD8lvhpib-IRyP_4E8szNRxt2HGjbPE_Cc",
    authDomain: "react-newcloset-coderhouse.firebaseapp.com",
    projectId: "react-newcloset-coderhouse",
    storageBucket: "react-newcloset-coderhouse.appspot.com",
    messagingSenderId: "19498146933",
    appId: "1:19498146933:web:9d9b2c8ea4bd43b91cac3c"
  }

)

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app)