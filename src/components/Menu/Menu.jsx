import { useEffect, useState } from 'react';
import './Menu.css';
import PizzaItem from './PizzaItem/PizzaItem';
import Title from '../Title';
import Subtitle from '../Subtitle';

const Menu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
                if (!res.ok) {
                    throw new Error("Failed to fetch pizzas");
                }
                const data = await res.json();
                setItems(data.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchPizzas();
    }, []);

    return (
        <main>
            <div className="menu-container">
                <Title text="The best pizza." />
                <Subtitle text="Straight out of the oven, straight to you." />
                {items.map((pizza) => (
                    <PizzaItem key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </main>
    );
};

export default Menu;