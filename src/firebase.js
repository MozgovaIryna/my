// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJq0HQh5GkYxEFWOUnJhqQaX_AkUMeks",
  authDomain: "react-chat-ecd79.firebaseapp.com",
  projectId: "react-chat-ecd79",
  storageBucket: "react-chat-ecd79.appspot.com",
  messagingSenderId: "153661985284",
  appId: "1:153661985284:web:62ad7f2d8f67c749b71b51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fs = getFirestore(app);
