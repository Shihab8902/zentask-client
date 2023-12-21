import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react"
import auth from "../firebase/firebase.config";
import { useEffect } from "react";


export const UserContext = createContext(null);



const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    //Create a new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //Sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }





    //Log out user
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    //Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }

        });

        return () => {
            unsubscribe();
        }
    }, []);






    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        userLogOut
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
}




export default AuthProvider