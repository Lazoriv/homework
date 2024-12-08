import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState("");

    return (
        <AuthContext.Provider value={{ userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};