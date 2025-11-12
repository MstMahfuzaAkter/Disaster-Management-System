import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxCjCUcpfa1efEPlgcsKNN8eHL0FHOm0",
  authDomain: "disaster-management-syst-1bc68.firebaseapp.com",
  projectId: "disaster-management-syst-1bc68",
  storageBucket: "disaster-management-syst-1bc68.firebasestorage.app",
  messagingSenderId: "711762276167",
  appId: "1:711762276167:web:c855cb77fa9b0bfbdc6662"
};

// Firebase app initialize
const app = initializeApp(firebaseConfig);

// Auth export
export const auth = getAuth(app);

// Firestore export
export const db = getFirestore(app); // ✅ এখানে db export হচ্ছে
