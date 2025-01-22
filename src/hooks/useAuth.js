import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
    const [user, setUser ] = useState(null) 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (user) =>{
            setUser(user ?user :null)
        });
        return unsubscribe();
    }),[] ;
  return user;
}

export default useAuth
