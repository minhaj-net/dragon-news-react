import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const upDateUser=(updateData)=>{
    return updateProfile(auth.currentUser,updateData)
  }

  useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscrib();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signInUser,
    loading,
    setLoading,
    upDateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
