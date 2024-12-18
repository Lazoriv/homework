import './Cart.css';
import { cartItems } from './data';
import Link from '../../components/Link/Link';
import Title from '../../components/Title';
import Button from '../../components/Button/Button';
import CartItem from './CartItem';
import { NavLink } from 'react-router';

const Cart = () => {
    return (
        <div className="container">
            <Link href="#" className="back-link" text="← Back to menu" />
            <Title className="cart-title" text="Your cart, vlad" />
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem cart={cartItem} key={cartItem.id} />
                ))}
            </div>
            <div className="cart-actions">
                <NavLink to="/order" className="order-btn">Order pizzas</NavLink>
                <Button className="clear-btn" text="Clear cart" />
            </div>
        </div>
    );
};

export default Cart;
