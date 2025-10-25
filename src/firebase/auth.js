import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = (email, password, displayName) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (displayName) {
        return updateProfile(userCredential.user, { displayName });
      }
      return userCredential.user;
    });
};

export const logoutUser = () => {
  return signOut(auth);
};
