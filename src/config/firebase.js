// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeJZ1c-N2wY6uw9dLFw9cjr6chTcFsLmQ",
  authDomain: "movie-app-72ae3.firebaseapp.com",
  projectId: "movie-app-72ae3",
  storageBucket: "movie-app-72ae3.appspot.com",
  messagingSenderId: "960512670899",
  appId: "1:960512670899:web:e7e90bbe6a8f57020284c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
