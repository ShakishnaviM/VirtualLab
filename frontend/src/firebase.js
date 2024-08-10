// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVyq-ApGX1qw2ISJI7mCi44LQ1to7tV0",
  authDomain: "virtuallab-16f3e.firebaseapp.com",
  projectId: "virtuallab-16f3e",
  storageBucket: "virtuallab-16f3e.appspot.com",
  messagingSenderId: "1035631981930",
  appId: "1:1035631981930:web:8303ee6becc9387cb06113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;