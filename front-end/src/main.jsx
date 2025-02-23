import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoowHD3jr81ut92AFZs1TGAIty8R3NuvM",
    authDomain: "full-stack-react-3119c.firebaseapp.com",
    projectId: "full-stack-react-3119c",
    storageBucket: "full-stack-react-3119c.firebasestorage.app",
    messagingSenderId: "439704106810",
    appId: "1:439704106810:web:c656a9a61636219b800203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
