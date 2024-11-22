import './PizzaItem.css';
import { useState } from 'react';
import Button from "../../Button/Button";
import Counter from "../Counter/Counter";

const PizzaItem = ({ pizza }) => {

    const [isShowCounter, setIsShowCounter] = useState(false);

    const handleCounterVisible = () => {
        setIsShowCounter(!isShowCounter);
    }

    return (
        <div className="pizza-item" key={pizza.id}>
            <img src={pizza.imageUrl} alt={`${pizza.name} pizza`} className="pizza-image" />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <p className="ingredients">{pizza.ingredients.join(", ")}</p>
                <p className="price">€{pizza.unitPrice}</p>
            </div>
            <div className="cart-controls">
                <Button onClick={handleCounterVisible} className={pizza.soldOut ? "sold-out" : "add-to-cart"}
                    disabled={pizza.soldOut}
                    text={pizza.soldOut ? "SOLD OUT" : "ADD TO CART"} />
                {isShowCounter && <Counter onHideCounter={() => setIsShowCounter(false)} />}
            </div>
        </div>
    );
};

export default PizzaItem;