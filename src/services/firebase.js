// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAWXl0EpF1gM3knd3CZRCdlYysXpH-_-A",
  authDomain: "ahorrapp-96295.firebaseapp.com",
  projectId: "ahorrapp-96295",
  storageBucket: "ahorrapp-96295.firebasestorage.app",
  messagingSenderId: "406934184741",
  appId: "1:406934184741:web:dd840e4e1350b3c5a270cc",
  measurementId: "G-MQ3EJHJP4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);