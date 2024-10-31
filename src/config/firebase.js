import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8PzjPwG9gvjv3JEFdguojmMBtb0IkWAE",
  authDomain: "react-vite-firebase-a6636.firebaseapp.com",
  projectId: "react-vite-firebase-a6636",
  storageBucket: "react-vite-firebase-a6636.firebasestorage.app",
  messagingSenderId: "555278900503",
  appId: "1:555278900503:web:45f5b9c16a5514ddd2eb52",
  measurementId: "G-F2NM490N8D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
