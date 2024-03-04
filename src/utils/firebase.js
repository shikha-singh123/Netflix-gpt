// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHsXd0fHZq4ss7theeUMeLlmJWBxtYJi4",
  authDomain: "netflixgpt-ca33b.firebaseapp.com",
  projectId: "netflixgpt-ca33b",
  storageBucket: "netflixgpt-ca33b.appspot.com",
  messagingSenderId: "38535209442",
  appId: "1:38535209442:web:b1866ee1fbb0a504a6d9bb",
  measurementId: "G-MT7TWBDZ2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();