import './PizzaItem.css';
import { useContext, useState } from 'react';
import Button from "../../../components/Button/Button";
import Counter from "../../../components/Counter/Counter";
import { CartContext } from '../../../context/CartContext';

const PizzaItem = ({ pizza }) => {

    const { state, onAddToCart, onIncrement, onDecrement } = useContext(CartContext);
    const [isShowCounter, setIsShowCounter] = useState(false);

    const qty = state.cartItems.reduce((acc, item) => item.id === pizza.id ? item.qty : acc, 0);

    const handleAddToCart = () => {
        onAddToCart(pizza);
        setIsShowCounter(!isShowCounter);
    };

    return (
        <div className="pizza-item" key={pizza.id}>
            <img src={pizza.imageUrl} alt={`${pizza.name} pizza`} className="pizza-image" />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <p className="ingredients">{pizza.ingredients.join(", ")}</p>
                <p className="price">€{pizza.unitPrice}</p>
            </div>
            <div className="cart-controls">
                <Button onClick={handleAddToCart} className={pizza.soldOut ? "sold-out" : "add-to-cart"}
                    disabled={pizza.soldOut}
                    text={pizza.soldOut ? "SOLD OUT" : "ADD TO CART"} />
                {isShowCounter &&
                    <Counter
                        qty={qty}
                        onIncrement={() => onIncrement(pizza)}
                        onDecrement={() => onDecrement(pizza)}
                    />}
            </div>
        </div>
    );
};

export default PizzaItem;