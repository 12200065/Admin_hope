import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAZVeMCPQ6JCl4cftyDTlHm76eu7cowtVg",
  authDomain: "hope-824a2.firebaseapp.com",
  databaseURL: "https://hope-824a2-default-rtdb.firebaseio.com",
  projectId: "hope-824a2",
  storageBucket: "hope-824a2.appspot.com",
  messagingSenderId: "1046341498566",
  appId: "1:1046341498566:web:1ed6a0086a93af8bfc49c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);






