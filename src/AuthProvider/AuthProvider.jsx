import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authProvider = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password )
    }
    
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
       const userStateChange =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return userStateChange;

    },[])

    const values = {user,createUser,login}
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;