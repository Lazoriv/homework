import './Order.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const schema = z.object({
    firstName: z.string().min(1, { message: "Ім'я є обов'язковим" }),
    phone: z.string().min(10, { message: 'Номер телефону має бути щонайменше 10 символів' }),
    address: z.string().min(1, { message: "Адреса поля є обов'язковим" }),
    priority: z.boolean().optional(),
    ingredients: z.array(z.string()).optional(),
});

const Order = () => {
    const navigate = useNavigate();
    const { state } = useContext(CartContext);
    const { userName } = useContext(AuthContext);

    const [totalCartPrice, setTotalCartPrice] = useState(0);

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: userName || '',
            phone: '',
            address: '',
            priority: false,
            ingredients: []
        },
        resolver: zodResolver(schema),
    });

    const calculateTotalPrice = (item) => {
        const quantity = item.quantity || 1;
        const unitPrice = item.unitPrice || 0;

        if (isNaN(quantity) || isNaN(unitPrice)) {
            return 0;
        }

        return quantity * unitPrice;
    };

    const calculateTotalCartPrice = () => {
        const total = state.cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
        setTotalCartPrice(total);
    };

    useEffect(() => {
        calculateTotalCartPrice();
    }, [state.cartItems]);

    const onSubmit = async (data) => {

        const cart = state.cartItems.map(item => {
            const totalPrice = calculateTotalPrice(item);
            return {
                name: item.name || "Unknown Pizza",
                pizzaId: String(item.id),
                quantity: item.quantity || 1,
                totalPrice: totalPrice,
                unitPrice: item.unitPrice,
                ingredients: item.ingredients || [],
            };
        });


        if (!data.address || !data.firstName || !data.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const orderData = {
            address: data.address,
            customer: data.firstName,
            phone: data.phone,
            priority: data.priority,
            position: "",
            cart: cart.map(item => ({
                ...item,
                addIngredients: item.ingredients || [],
            })),
        };

        try {
            const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const result = await response.json();

            console.log(result);

            if (result.status === 'success') {
                const orderId = result.data.id;
                navigate(`/orders/${orderId}`);
            } else {
                alert(result.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };

    return (
        <div>
            <Title text="Ready to order? Let's go!" />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Input
                            id="firstName"
                            type="text"
                            name="firstName"
                            control={form.control}
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <Input
                            id="phone"
                            type="tel"
                            name="phone"
                            control={form.control}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Input
                            id="address"
                            type="text"
                            name="address"
                            control={form.control}
                            placeholder="Enter your address"
                        />
                    </div>

                    <div className="checkbox-group">
                        <div className="checkbox-wrapper">
                            <Input
                                id="priority"
                                type="checkbox"
                                name="priority"
                                control={form.control}
                            />
                            <label htmlFor="priority">Want to give your order priority?</label>
                        </div>
                    </div>

                    <Button type="submit" className="order-btn" text={`Order now for €${totalCartPrice.toFixed(2)}`} />
                </form>
            </FormProvider>
        </div>
    );
};

export default Order;
