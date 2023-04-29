import React from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
   
    const signInWithGitHub = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        console.log('logged in user inside auth state observer', loggedUser);
        setUser(loggedUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
    },[])
    // const user = {displayName: 'Muri Khan'}
    // const user = null
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGitHub
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;