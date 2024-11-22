import { useState } from 'react';
import './Counter.css';
import Button from '../../../Button/Button';

const Counter = ({ onHideCounter }) => {

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            onHideCounter();
        }
    }

    return (
        <div className="counter">
            <Button onClick={handleDecrement} className="decrement" text="-" aria-label="Decrease quantity" />
            <span>{count}</span>
            <Button onClick={handleIncrement} className="increment" text="+" aria-label="Increase quantity" />
        </div>
    )
}

export default Counter;