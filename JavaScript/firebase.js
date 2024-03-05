// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqTpNdjDrStLAUYZpJYrpE__NfyQ7cKDw",
  authDomain: "rose-1703718914136.firebaseapp.com",
  projectId: "rose-1703718914136",
  storageBucket: "rose-1703718914136.appspot.com",
  messagingSenderId: "128960895326",
  appId: "1:128960895326:web:c7e365679c8d6fdf8357cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, doc, setDoc, getDocs, collection, deleteDoc, updateDoc };


