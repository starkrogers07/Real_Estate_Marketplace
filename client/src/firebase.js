// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-plaza-07.firebaseapp.com",
  projectId: "property-plaza-07",
  storageBucket: "property-plaza-07.appspot.com",
  messagingSenderId: "92048135594",
  appId: "1:92048135594:web:b68b28ef9e72b39a4487d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);