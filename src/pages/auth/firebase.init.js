// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3OIMOPN0uyfIHejwwXA2vBlGkjVeMybU",
  authDomain: "shoe-inventory-212be.firebaseapp.com",
  projectId: "shoe-inventory-212be",
  storageBucket: "shoe-inventory-212be.appspot.com",
  messagingSenderId: "961710001593",
  appId: "1:961710001593:web:51241392e8563a406a7a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;