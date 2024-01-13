import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext(null);

const AuthContextProviderMain = ({ children }) => {
  const [user, setUser] = useState({});
  const signUp = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  };
  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const signOutUser = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const providerValue = {
    user,
    signUp,
    signIn,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProviderMain;

export const UserAuth = () => {
  return useContext(AuthContext);
};
