// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDolYOCYML5wqWViYDfXhshcwo4mmREOwQ",
  authDomain: "prepwise-3c751.firebaseapp.com",
  projectId: "prepwise-3c751",
  storageBucket: "prepwise-3c751.firebasestorage.app",
  messagingSenderId: "81265378220",
  appId: "1:81265378220:web:829a8449999b255088b009",
  measurementId: "G-2MZEHTG8TT",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
