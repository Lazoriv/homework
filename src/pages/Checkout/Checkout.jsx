import './Checkout.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title';

const Checkout = () => {
    const [firstName, setFirstName] = useState('vlad');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [priority, setPriority] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePriorityChange = () => {
        setPriority(!priority);
    };

    return (
        <div>
            <Title text="Ready to order? Let's go!" />
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Input
                        id="address"
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        required
                    />
                </div>

                <div className="checkbox-group">
                    <div className="checkbox-wrapper">
                        <Input
                            id="priority"
                            type="checkbox"
                            checked={priority}
                            onChange={handlePriorityChange}
                        />
                        <label htmlFor="priority">Want to give your order priority?</label>
                    </div>
                </div>

                <Button type="submit" className="order-btn" text="Order now for €12.00" />
            </form>
        </div>
    );
};

export default Checkout;
