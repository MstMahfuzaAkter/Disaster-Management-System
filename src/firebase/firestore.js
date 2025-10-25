import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "firebase/firestore";

export const addDocument = (collectionName, data) => {
  return addDoc(collection(db, collectionName), data);
};

export const getDocuments = async (collectionName) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getDocumentById = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
};

export const updateDocument = (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  return updateDoc(docRef, data);
};

export const deleteDocument = (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  return deleteDoc(docRef);
};

export const queryDocuments = async (collectionName, field, operator, value) => {
  const q = query(collection(db, collectionName), where(field, operator, value));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
