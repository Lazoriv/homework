import { useState, useEffect } from 'react';
import './Menu.css';
import PizzaItem from "./PizzaItem/PizzaItem";
import Title from '../Title';
import Subtitle from '../Subtitle';

const Menu = () => {

    const [items, setItems] = useState([]);

    const getPizzas = async () => {
        try {
            const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
            const data = await res.json();
            setItems(data.data);
        } catch (e) {
            console.log(e.message);
        }

    };

    useEffect(() => {
        getPizzas();
    }, [])


    return (
        <main>
            <Title text="The best pizza." />
            <Subtitle text="Straight out of the oven, straight to you." />
            <div className="menu-container">
                {items.map((pizza) => (
                    <PizzaItem pizza={pizza} key={pizza.id} />
                ))}
            </div>
        </main>
    );
};

export default Menu;