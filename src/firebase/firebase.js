// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_TMDB_API_KEY,
  authDomain: "netflixgpt-3743a.firebaseapp.com",
  projectId: "netflixgpt-3743a",
  storageBucket: "netflixgpt-3743a.firebasestorage.app",
  messagingSenderId: "257018900414",
  appId: "1:257018900414:web:b45f30ad41ea7c219c53ef",
  measurementId: "G-59G62RCF2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();