import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase";

const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logging=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth);
    }
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
    }
    const googleSignIn=()=>{
          return signInWithPopup(auth,googleProvider )
    }
    useEffect(()=> {
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const info={
       user,
       loading,
       createUser,
       updateUser,
       logout,
       logging,
       googleSignIn,
    }
    return (
        <div>
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
        </div>
       
    );
};

export default AuthProvider;