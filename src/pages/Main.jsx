import Menu from '../pages/Menu/Menu';
import Cart from '../pages/Cart/Cart';
import Form from '../pages/Form/Form';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

const Main = () => {

    return (
        <AuthProvider>
            <main>
                <Routes>
                    <Route path="/" element={<Form action="" method="GET" />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </AuthProvider>
    )
}

export default Main