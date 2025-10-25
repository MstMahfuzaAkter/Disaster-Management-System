import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import "../firebase/firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setUser({ uid: currentUser.uid, email: currentUser.email, role: userSnap.data().role });
                } else {
                    await setDoc(userRef, { role: "user" });
                    setUser({ uid: currentUser.uid, email: currentUser.email, role: "user" });
                }
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [auth, db]);

    const register = (email, password, role = "user") => {
        return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            await setDoc(doc(db, "users", userCredential.user.uid), { role });
            setUser({ uid: userCredential.user.uid, email, role });
            return userCredential.user;
        });
    };

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth); 

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
