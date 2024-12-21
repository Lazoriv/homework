import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState("");

    const value = useMemo(() => ({
        userName,
        setUserName,
    }), [userName]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};