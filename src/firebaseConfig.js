// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect,getRedirectResult, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQz1xwl20QE0Jk9FvVrXiUA6i_r7zhzMI",
  authDomain: "reactwithauth.firebaseapp.com",
  projectId: "reactwithauth",
  storageBucket: "reactwithauth.appspot.com",
  messagingSenderId: "208017205584",
  appId: "1:208017205584:web:42b40b55eccdf526b66455",
  measurementId: "G-46D1390QXQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


const auth=getAuth()

export  {
getAuth,
    app,
    provider,
    auth,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider
    
}