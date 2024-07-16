import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authProvider = createContext()
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
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
    const updateuserPasaword = (currentUser,newPassword)=>{
        return updatePassword(currentUser,newPassword)
    }
    const emailVerified = ()=>{
       return sendEmailVerification(user);
    }

    const loginGoogle = ()=>{
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
       const userStateChange =  onAuthStateChanged(auth,currentUser =>{
            setLoader(false);
            setUser(currentUser);
        })
        return userStateChange;

    },[])

    const values = {user,createUser,login,resetPassword,logOut,loader,updateuserPasaword,emailVerified,loginGoogle}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;