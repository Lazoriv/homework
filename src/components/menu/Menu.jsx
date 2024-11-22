import './Menu.css';
import pizzas from "./data";
import PizzaItem from "./PizzaItem/PizzaItem";

const Menu = () => {
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <PizzaItem pizza={pizza} key={pizza.id} />
            ))}
        </div>
    );
};

export default Menu;