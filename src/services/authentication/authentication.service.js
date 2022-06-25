// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDJZwMQnUyz-d6zcDUgY4bRUnAAzCTWXo",
  authDomain: "mealstogo-3c5e6.firebaseapp.com",
  projectId: "mealstogo-3c5e6",
  storageBucket: "mealstogo-3c5e6.appspot.com",
  messagingSenderId: "523274165099",
  appId: "1:523274165099:web:e35f91e7fc39c65ae30a2e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const authStateRequest = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutRequest = () => signOut(auth);
