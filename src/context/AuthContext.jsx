import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event, navigate, inputValue) => {
        event.preventDefault();
        setUserName(inputValue);
        navigate('/menu');
    };

    return (
        <AuthContext.Provider value={{ userName, setUserName, inputValue, setInputValue, handleInputChange, handleSubmit }}>
            {children}
        </AuthContext.Provider>
    );
};