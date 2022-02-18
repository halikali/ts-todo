// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXMH_cu50BtKRxvpO2geWFj-wnxzi72XU",
  authDomain: "ts-todo-3e9ea.firebaseapp.com",
  projectId: "ts-todo-3e9ea",
  storageBucket: "ts-todo-3e9ea.appspot.com",
  messagingSenderId: "993431926345",
  appId: "1:993431926345:web:6882c7c23fb4eddb86b198",
  measurementId: "G-236BFJE8NJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
