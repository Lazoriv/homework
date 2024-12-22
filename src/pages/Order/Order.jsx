import './Order.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const schema = z.object({
    firstName: z.string().min(1, { message: "Ім'я є обов'язковим" }),
    phone: z.string().min(10, { message: 'Номер телефону має бути щонайменше 10 символів' }),
    address: z.string().min(1, { message: "Адреса поля є обов'язковим" }),
    priority: z.boolean().optional(),
});

const Order = () => {
    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            phone: '',
            address: '',
            priority: false,
        },
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        form.reset();
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

                    <Button type="submit" className="order-btn" text="Order now for €12.00" />
                </form>
            </FormProvider>
        </div>
    );
};

export default Order;
