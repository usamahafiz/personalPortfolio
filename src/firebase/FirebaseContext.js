import React, { createContext, useContext } from 'react'
import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword , signOut } from 'firebase/auth'


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = ({ children }) => {
    const signIn = ( email , password ) => signInWithEmailAndPassword(auth, email, password);
    const logout = signOut(auth);

  return (
    <FirebaseContext.Provider value={{ signIn , logout }}>
        {children}
    </FirebaseContext.Provider>
  );
};

