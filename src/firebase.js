// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "tips-next.firebaseapp.com",
  projectId: "tips-next",
  storageBucket: "tips-next.appspot.com",
  messagingSenderId: "236335137819",
  appId: "1:236335137819:web:0668fe9199778e1da964be",
  measurementId: "G-QFN0ECR5J4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);