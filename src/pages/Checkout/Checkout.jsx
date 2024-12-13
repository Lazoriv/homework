import './Checkout.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title';

const Checkout = () => {

    return (
        <div>
            <Title text="Ready to order? Let's go!" />
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Input id="firstName" type="text" value="vlad" readOnly />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <Input id="phone" type="tel" required />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Input id="address" type="text" required />
                </div>

                <div className="checkbox-group">
                    <div className="checkbox-wrapper">
                        <Input id="priority" type="checkbox" />
                        <label htmlFor="priority">Want to give your order priority?</label>
                    </div>
                </div>

                <Button type="submit" className="order-btn" text="Order now for €12.00" />
            </form>
        </div>
    );
};

export default Checkout;