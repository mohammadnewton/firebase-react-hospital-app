import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaOel8jn0ujIe3gTNkyKHqs502boSKvsY",
  authDomain: "hospital-50403.firebaseapp.com",
  projectId: "hospital-50403",
  storageBucket: "hospital-50403.appspot.com",
  messagingSenderId: "1009572983634",
  appId: "1:1009572983634:web:d8a83bd7c7a11d1b0a408b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;