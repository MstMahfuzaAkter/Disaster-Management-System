
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxCjCUcpfa1efEPlgcsKNN8eHL0FHOm0",
  authDomain: "disaster-management-syst-1bc68.firebaseapp.com",
  projectId: "disaster-management-syst-1bc68",
  storageBucket: "disaster-management-syst-1bc68.firebasestorage.app",
  messagingSenderId: "711762276167",
  appId: "1:711762276167:web:c855cb77fa9b0bfbdc6662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
