import React from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase-config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
   
    const signInWithGitHub = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    // const user = {displayName: 'Muri Khan'}
    const user = null
    const authInfo = {
        user,
        createUser,
        signIn,
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