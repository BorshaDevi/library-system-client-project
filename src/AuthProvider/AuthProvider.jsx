import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase";
import axios from "axios";

const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logging=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
    }
    const googleSignIn=()=>{
        setLoading(true)
          return signInWithPopup(auth,googleProvider )
    }
    useEffect(()=> {
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email || user?.email
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            if(user){
                axios.post('https://library-system-server-project.vercel.app/token',{email:userEmail},{withCredentials:true})
                .then(res => {
                    console.log(res.data)
                })

            }
            else{
                axios.post('https://library-system-server-project.vercel.app/logout',{email:userEmail},{withCredentials:true})
                .then(res => {
                    
                })
            }
        })
        return () => {
             return unSubscribe()
        }
    },[user])
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