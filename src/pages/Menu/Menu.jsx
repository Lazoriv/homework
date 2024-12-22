import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';
import './Menu.css';
import PizzaItem from './PizzaItem/PizzaItem';

const Menu = () => {
    const { onAdd, onInit } = useContext(CartContext);

    const { data, isLoading, error } = useFetch("https://react-fast-pizza-api.onrender.com/api/menu");

    useEffect(() => {
        if (data && data.status === 'success' && Array.isArray(data.data)) {
            onInit(data.data);
        }
    }, [data, onInit]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="menu-container">
            {data && data.data && data.data.length > 0 ? (
                data.data.map((pizza) => (
                    <PizzaItem
                        key={pizza.id}
                        pizza={pizza}
                        onAddToCart={() => onAdd(pizza)}
                    />
                ))
            ) : (
                <p>No items found</p>
            )}
        </div>
    );
};

export default Menu;