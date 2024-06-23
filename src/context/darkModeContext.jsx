import { createContext, useEffect, useState } from "react";


export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // Hook to hold the current mode status
    const [darkMode, setdarkMode] = useState(
        // Initialize the state from the local storage or false if not present
        JSON.parse(localStorage.getItem('darkMode')) || false
    );

    const toggle = () => {
       setdarkMode(!darkMode);
    };
    // Hook to update local storage whenever the state changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    },[darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};