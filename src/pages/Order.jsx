import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import SubTitle from "../components/Subtitle";
import Title from "../components/Title";

const Order = () => {
    const { id } = useParams();

    const orderStatus = "Processing";

    return (
        <div>
            <Title text="Order Status" />
            <SubTitle className="subtitle" text={`Order ID: ${id}`} />
            <SubTitle className="subtitle" text={`Order ID: ${orderStatus}`} />
            <Button onClick={() => window.history.back()} className="order-btn" text="Go Back" />
        </div>
    );
};

export default Order;