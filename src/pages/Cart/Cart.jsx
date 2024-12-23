import './Cart.css';
import Link from '../../components/Link/Link';
import Title from '../../components/Title';
import Button from '../../components/Button/Button';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Cart = () => {

    const { state } = useContext(CartContext);
    const { userName } = useContext(AuthContext);

    return (
        <div className="container">
            <Link href="#" className="back-link" text="← Back to menu" />
            <Title className="cart-title" text={`Your cart, ${userName}`} />
            <div className="cart-items">
                {state.cartItems.length > 0 ? (
                    state.cartItems.map((cartItem) => (
                        <CartItem state={state} cart={cartItem} key={cartItem.id} />
                    ))
                ) : (
                    <p className="empty-cart">Your cart is empty. Add some pizzas to start your order!</p>
                )}
            </div>
            <div className="cart-actions">
                <NavLink to="/order" className={`order-btn ${state.cartItems.length === 0 ? 'disabled' : ''}`}>
                    Order pizzas
                </NavLink>
                <Button className="clear-btn" text="Clear cart" />
            </div>
        </div>
    );
};

export default Cart;
