// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnr_uhuPhLGfWK9tUsiD1j7JGlj2RuBhc",
  authDomain: "chat-app-bb828.firebaseapp.com",
  projectId: "chat-app-bb828",
  storageBucket: "chat-app-bb828.appspot.com",
  messagingSenderId: "803489447361",
  appId: "1:803489447361:web:4b165c619e68e9bd040340",
  measurementId: "G-YSGNKZ8ZNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
