
import { useContext } from 'react';
import Button from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ cart }) => {

    const { onIncrement, onDecrement, onDelete } = useContext(CartContext);

    const totalPrice = cart.qty * cart.unitPrice;


    return (
        <div className="cart-item" key={cart.id}>
            <span className="quantity-text">{cart.qty}×</span>
            <span>{cart.name}</span>
            {<span className="price">€{totalPrice.toFixed(1)}</span>
            }

            <div className="quantity-controls">
                <Counter
                    qty={cart.qty}
                    onIncrement={() => onIncrement(cart)}
                    onDecrement={() => onDecrement(cart)}
                />
            </div>
            <Button onClick={() => onDelete(cart.id)} className="btn" text="DELETE" />
        </div>
    )
};

export default CartItem; 