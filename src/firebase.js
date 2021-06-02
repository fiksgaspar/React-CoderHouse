import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

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

export const auth = firebase.auth()

const emailProvider = new firebase.auth.EmailAuthProvider()

export const signInWithMail = ()=>{
  auth.signInWithEmailAndPassword(emailProvider).then((res)=>{
    console.log(res.user)
  }).catch((error)=>{
    console.log(error.message)
  })
}

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () =>{
  auth.signInWithPopup(googleProvider).then((res)=>{
    console.log(res.user)
  }).catch((error)=>{
    console.log(error.message)
  })
}

export const logOut = () =>{
  auth.signOut().then(()=>{
    console.log("logged out")
  }).catch((error)=>{
    console.log('Hubo algun error de logeo')
  })
}