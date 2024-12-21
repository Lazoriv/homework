import './Counter.css';
import Button from '../Button/Button';

const Counter = ({ qty, onIncrement, onDecrement }) => {

    return (
        <div className="counter">
            <Button
                onClick={onDecrement}
                className="decrement"
                text="-"
                aria-label="Decrease quantity"
                disabled={qty <= 0}
            />
            <span>{qty}</span>
            <Button
                onClick={onIncrement}
                className="increment"
                text="+"
                aria-label="Increase quantity"
            />
        </div>
    )
}

export default Counter;