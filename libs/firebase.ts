// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBk47_t2FJyODF2P5ZJP5GuinuIRjUKk3s",
  authDomain: "vinilonas-e-commerce.firebaseapp.com",
  projectId: "vinilonas-e-commerce",
  storageBucket: "vinilonas-e-commerce.appspot.com",
  messagingSenderId: "402091822433",
  appId: "1:402091822433:web:f4e04138becd3dca0fc920"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
