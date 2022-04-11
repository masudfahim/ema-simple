// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP9IyvUXyxLZo7afp9ateBVabVnP7uskg",
    authDomain: "ema-jhon-simple-a3efd.firebaseapp.com",
    projectId: "ema-jhon-simple-a3efd",
    storageBucket: "ema-jhon-simple-a3efd.appspot.com",
    messagingSenderId: "862243491452",
    appId: "1:862243491452:web:430019f2135180ba0243f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;