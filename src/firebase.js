import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYQ_Oi9LNN5M9by-r6pnyKOuyL1T3_-aM",
  authDomain: "react-notes-a2d4d.firebaseapp.com",
  projectId: "react-notes-a2d4d",
  storageBucket: "react-notes-a2d4d.appspot.com",
  messagingSenderId: "455773259829",
  appId: "1:455773259829:web:d33f7d1b04022c5b86c97c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")