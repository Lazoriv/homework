import Menu from '../pages/Menu/Menu';
import Cart from '../pages/Cart/Cart';
import Form from '../pages/Form/Form';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const Main = () => {

    return (

        <main>
            <Routes>
                <Route path="/" element={<Form action="" method="GET" />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>

    )
}

export default Main