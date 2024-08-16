// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU_OdogYb2GymFynPM1qKrjix8ofY1Mtg",
  authDomain: "flashcardsass-aa82c.firebaseapp.com",
  projectId: "flashcardsass-aa82c",
  storageBucket: "flashcardsass-aa82c.appspot.com",
  messagingSenderId: "447728107262",
  appId: "1:447728107262:web:c81a337078971a9b3b2faf",
  measurementId: "G-E7Y4DZ9185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db;