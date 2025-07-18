import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Config/firebase";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const token = await currentUser.getIdToken();

        try {
          await axios.post(
            "http://localhost:3000/auth/login",
            { token },
            { withCredentials: true } // Important to send cookies
          );
        } catch (error) {
          console.error("Failed to set auth cookie:", error);
        }
      } else {
        try {
          await axios.post(
            "http://localhost:3000/auth/logout",
            {},
            { withCredentials: true }
          );
        } catch (error) {
          console.error("Failed to clear auth cookie:", error);
        }
      }
    });

    return () => unSubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Authprovider;
