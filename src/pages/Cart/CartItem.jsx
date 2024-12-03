import Button from '../../components/Button/Button';

const CartItem = ({ cart }) => {

    return (
        <div className="cart-item">
            <span className="quantity-text">{cart.quantity}×</span>
            <span>{cart.name}</span>
            <span className="price">€{cart.price.toFixed(1)}</span>
            <div className="quantity-controls">
                <Button className="quantity-btn" text="-" />
                <span>{cart.quantity}</span>
                <Button className="quantity-btn" text="+" />
                <Button className="delete-btn" text="DELETE" />
            </div>
        </div>
    );
};

export default CartItem; 