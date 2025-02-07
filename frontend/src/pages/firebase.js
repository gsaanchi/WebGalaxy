// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtJ5YfT8mB-KYR5-F2ly4lHRAIOWsP6DA",
  authDomain: "kriti-prod.firebaseapp.com",
  projectId: "kriti-prod",
  storageBucket: "kriti-prod.firebasestorage.app",
  messagingSenderId: "256312530330",
  appId: "1:256312530330:web:d4956e4c94b09033975623",
  measurementId: "G-NPLK5HH845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);