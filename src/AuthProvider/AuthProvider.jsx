import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authProvider = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password )
    }
    
    const login = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoader(true);
        return signOut(auth);
    }

    const resetPassword = (email) =>{
        setLoader(true);
        return sendPasswordResetEmail(auth,email)
    }
    
    useEffect(()=>{
       const userStateChange =  onAuthStateChanged(auth,currentUser =>{
            setLoader(false);
            setUser(currentUser);
        })
        return userStateChange;

    },[])

    const values = {user,createUser,login,resetPassword,logOut,loader}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;