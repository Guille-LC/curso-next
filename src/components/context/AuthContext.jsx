"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
import { auth, googleProvider } from "@/src/firebase/config";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({children}) {
    const [user, setUser] = useState({
        isAutenthicated: false,
        email: null,
        userId: null
    })

    const login = async (email,password) => {
        try {
            await signInWithEmailAndPassword(auth,email,password)
        } catch (error) {
            console.log("Algo salio mal en el login!", error);
        }
    }

    const register = async (email,password) => {
        try {
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (error) {
            console.log("Algo salio mal al registrar usuario!", error);
        }
    }

    const logout =  async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error("Error durante logout:", error);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            const user = result.user
            console.log("User logged in with Google:", user);
        } catch (error) {
            console.error("Error during Google login:", error);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser({
                    isAuthenticated: true,
                    email: currentUser.email,
                    userId: currentUser.userId
                });
            } else {
                setUser({
                    isAuthenticated: false,
                    email: null,
                    userId: null
                });
            }
        })
    })

    return(
        <AuthContext.Provider value={{user,login,register,logout,loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}