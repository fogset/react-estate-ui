// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHuHgsO6jJ584Vr8OJyE-MFvaZj3hU7tw",
    authDomain: "estate-180f8.firebaseapp.com",
    projectId: "estate-180f8",
    storageBucket: "estate-180f8.appspot.com",
    messagingSenderId: "1013673148900",
    appId: "1:1013673148900:web:479584b83de9c31c8387f1",
    measurementId: "G-PSG2DY03XE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
