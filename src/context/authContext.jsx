import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // Hook to hold current user information
    const [currentUser, setCurrentUser] = useState(
        // Initialize the state from the local storage or null if not present
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:8800/api/auth/login',inputs,{
            withCredentials:true,
        });
        
        setCurrentUser(res.data);
    };
    // Hook to update local storage whenever the current user changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};