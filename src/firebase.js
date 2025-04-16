// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg729Xo67-86NLOl90xFhkgEUJCQqe_OE",
  authDomain: "racky-sir-site.firebaseapp.com",
  projectId: "racky-sir-site",
  storageBucket: "racky-sir-site.firebasestorage.app",
  messagingSenderId: "996636100810",
  appId: "1:996636100810:web:a6baaffd2183d0c3c40c33",
  measurementId: "G-4GL2CHZKSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };