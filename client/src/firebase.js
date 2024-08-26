// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-e31ee.firebaseapp.com",
  projectId: "mern-state-e31ee",
  storageBucket: "mern-state-e31ee.appspot.com",
  messagingSenderId: "921312016136",
  appId: "1:921312016136:web:e0a6926a51a8ac9cbfdebd",
  measurementId: "G-MG10VP7LH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
