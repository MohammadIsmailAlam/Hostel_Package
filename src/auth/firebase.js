// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCS6yR4IOrya3dadAl50mnNUYuHzz3C6g",
  authDomain: "hostal-package.firebaseapp.com",
  projectId: "hostal-package",
  storageBucket: "hostal-package.appspot.com",
  messagingSenderId: "698387960963",
  appId: "1:698387960963:web:da269523f31289641677b6",
  measurementId: "G-YQ1GXGTQTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);