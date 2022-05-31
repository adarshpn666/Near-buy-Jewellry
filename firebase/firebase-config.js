// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBcfw6fdjkQM0IMB6v280pENdiU92JW5yM",

  authDomain: "near-by-jewellery.firebaseapp.com",

  projectId: "near-by-jewellery",

  storageBucket: "near-by-jewellery.appspot.com",

  messagingSenderId: "916150016218",

  appId: "1:916150016218:web:70e2c0980ea469a4716de3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

