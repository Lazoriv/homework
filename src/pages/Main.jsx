import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../pages/Form/Form';

const MenuLazy = lazy(() => import('../pages/Menu/Menu'));
const CartLazy = lazy(() => import('../pages/Cart/Cart'));
const OrderLazy = lazy(() => import('./Order/Order'));
const StatusLazy = lazy(() => import('./Status/Status'));

const Main = () => {
    return (
        <main>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<Form action="" method="GET" />} />
                    <Route path="/menu" element={<MenuLazy />} />
                    <Route path="/cart" element={<CartLazy />} />
                    <Route path="/order" element={<OrderLazy />} />
                    <Route path="/orders/:id" element={<StatusLazy />} />
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
