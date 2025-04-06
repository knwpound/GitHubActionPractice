// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFvT9bLsFTCjT0F8Pfy7aMq9vk5l5Aiwc",
  authDomain: "se2project-8cacd.firebaseapp.com",
  projectId: "se2project-8cacd",
  storageBucket: "se2project-8cacd.firebasestorage.app",
  messagingSenderId: "506814459843",
  appId: "1:506814459843:web:92753235822203ba82d776",
  measurementId: "G-HM88W63Z84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);