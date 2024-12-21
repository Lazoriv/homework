import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import './Menu.css';
import PizzaItem from './PizzaItem/PizzaItem';

const Menu = () => {
    const { state, onAdd, onInit } = useContext(CartContext);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
                if (!res.ok) {
                    throw new Error("Failed to fetch pizzas");
                }
                const data = await res.json();
                onInit(data.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchPizzas();
    }, [onInit]);

    return (
        <div className="menu-container">
            {state.items.map((pizza) => (
                <PizzaItem
                    key={pizza.id}
                    pizza={pizza}
                    onAddToCart={() => onAdd(pizza)}
                />
            ))}
        </div>
    );
};

export default Menu;