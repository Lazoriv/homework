import './PizzaItem.css';
import Button from "../../button/Button";

const PizzaItem = ({ pizza }) => {
    return (
        <div className="pizza-item" key={pizza.id}>
            <img src={pizza.imageUrl} alt={`${pizza.name} pizza`} className="pizza-image" />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <p className="ingredients">{pizza.ingredients.join(", ")}</p>
                <p className="price">€{pizza.unitPrice}</p>
            </div>
            <Button className={pizza.soldOut ? "sold-out" : "add-to-cart"}
                disabled={pizza.soldOut}
                text={pizza.soldOut ? "SOLD OUT" : "ADD TO CART"} />
        </div>
    );
};

export default PizzaItem;