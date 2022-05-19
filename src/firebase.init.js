// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtuOqm_3Lim76brBtB9ska5AojJyPVyE",
  authDomain: "taskmanager-b17b2.firebaseapp.com",
  projectId: "taskmanager-b17b2",
  storageBucket: "taskmanager-b17b2.appspot.com",
  messagingSenderId: "899819755013",
  appId: "1:899819755013:web:d4613050440f396bd82e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth