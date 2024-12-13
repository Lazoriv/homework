import Menu from '../pages/Menu/Menu';
import Cart from '../pages/Cart/Cart';
import Form from '../pages/Form/Form';
import Checkout from './Checkout/Checkout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './Order';


const Main = () => {

    return (

        <main>
            <Routes>
                <Route path="/" element={<Form action="" method="GET" />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders/:id" element={<Order />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>

    )
}

export default Main