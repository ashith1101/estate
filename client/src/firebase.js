// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-184af.firebaseapp.com",
  projectId: "mern-estate-184af",
  storageBucket: "mern-estate-184af.appspot.com",
  messagingSenderId: "548950044001",
  appId: "1:548950044001:web:50199e1c457c0df41aa920"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);