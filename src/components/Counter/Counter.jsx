import { useState } from 'react';
import './Counter.css';

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
            <button onClick={handleDecrement} className="decrement" aria-label="Decrease quantity">-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} className="increment" aria-label="Increase quantity">+</button>
        </div>
    )
}

export default Counter;