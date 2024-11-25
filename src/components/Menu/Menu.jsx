import './Menu.css';
import pizzas from "./data";
import PizzaItem from "./PizzaItem/PizzaItem";
import Title from '../Title';
import Subtitle from '../Subtitle';

const Menu = () => {
    return (
        <main>
            <Title text="The best pizza." />
            <Subtitle text="Straight out of the oven, straight to you." />
            <div className="menu-container">
                {pizzas.map((pizza) => (
                    <PizzaItem pizza={pizza} key={pizza.id} />
                ))}
            </div>
        </main>
    );
};

export default Menu;