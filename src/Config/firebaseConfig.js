// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0oG1AN9XMRxufrVRM5dCHK0QEttOlr8",
  authDomain: "budget-tracker-10a20.firebaseapp.com",
  projectId: "budget-tracker-10a20",
  storageBucket: "budget-tracker-10a20.appspot.com",
  messagingSenderId: "968161342231",
  appId: "1:968161342231:web:6ceb7e71d8a28dd9e13d52",
  measurementId: "G-Y5G4MZRLQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}