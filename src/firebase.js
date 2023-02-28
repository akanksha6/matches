import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClQQC1cs5PYhUIdyqBte7UHjlbvbmfs-4",
  authDomain: "matches-adb77.firebaseapp.com",
  projectId: "matches-adb77",
  storageBucket: "matches-adb77.appspot.com",
  messagingSenderId: "184161176383",
  appId: "1:184161176383:web:c424ccf8f4d71a9ee0218a",
  measurementId: "G-PCYGRYWZ42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {signInWithEmailAndPassword, onAuthStateChanged};