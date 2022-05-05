// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO:  SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDltk_Wj2F0kqSsr7IcPxPVeA5w6QKiBHg",
  authDomain: "dreamsvehicle-54dec.firebaseapp.com",
  projectId: "dreamsvehicle-54dec",
  storageBucket: "dreamsvehicle-54dec.appspot.com",
  messagingSenderId: "679834731958",
  appId: "1:679834731958:web:b9e0f86bc1c5561653ed17",
  measurementId: "G-902BL6K97R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth