import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNprUWp7GX6mkDKAE9rOzSOTJME7bUiMs",
  authDomain: "react-vite-firebase-81338.firebaseapp.com",
  projectId: "react-vite-firebase-81338",
  storageBucket: "react-vite-firebase-81338.firebasestorage.app",
  messagingSenderId: "635912022568",
  appId: "1:635912022568:web:edb82cad9012a8d7a3a31d",
  measurementId: "G-771ZRF6L5K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
