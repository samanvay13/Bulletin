// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bulletin-ce378.firebaseapp.com",
  projectId: "bulletin-ce378",
  storageBucket: "bulletin-ce378.firebasestorage.app",
  messagingSenderId: "424097997842",
  appId: "1:424097997842:web:46950c83e777ec3b9224cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);