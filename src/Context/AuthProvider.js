import React, { useEffect } from 'react';
import app from "../firebase/firebase.config";
import { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] =useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

   const LoginUser = (email, password) => {
     setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };
    

   const logOut =()=>{
     setLoading(true);
    return signOut(auth);
   }

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (userInfo) => {
      return updateProfile(auth.currentUser, userInfo);
    };
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (createUser) => {
        console.log('user observing')
        setUser(createUser);
        setLoading(false);
        
      });
      return () => unsubscribe();
    }, []);
    

    const authInfo = {
      createUser,
      updateUser,
      LoginUser,
      googleLogin,
      logOut,
      user,
      loading,
    };


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;