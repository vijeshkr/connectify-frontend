import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // Hook to hold current user information
    const [currentUser, setCurrentUser] = useState(
        // Initialize the state from the local storage or null if not present
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        setCurrentUser({
            id:1,
            name:'Vijesh KR',
            profilePic:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        })
    };
    // Hook to update local storage whenever the current user changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};