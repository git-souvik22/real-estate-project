// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-estate-6efef.firebaseapp.com",
  projectId: "react-estate-6efef",
  storageBucket: "react-estate-6efef.appspot.com",
  messagingSenderId: "739942110414",
  appId: "1:739942110414:web:f98874335bc411a0e16c9f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
