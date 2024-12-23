import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import './Status.css';

const formatEstimatedDelivery = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

const Status = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`);
                const result = await response.json();

                if (result.status === 'success') {
                    setOrder(result.data);
                } else {
                    console.error('Failed to fetch order data');
                    alert('Failed to fetch order data');
                }
            } catch (error) {
                console.error('Error fetching order:', error);
                alert('Something went wrong. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [id]);


    const calculateTimePassed = (estimatedDelivery) => {
        if (!estimatedDelivery) {
            return 0;
        }
        const estimatedDeliveryDate = new Date(estimatedDelivery);
        const currentTime = Date.now();
        const timeDifference = currentTime - estimatedDeliveryDate.getTime();
        const minutesPassed = Math.abs(Math.floor(timeDifference / 1000 / 60));
        return minutesPassed;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!order) {
        return <div>No order found</div>;
    }


    const minutesPassed = calculateTimePassed(order.estimatedDelivery);


    const calculateOrderTotal = () => {
        let total = 0;

        if (order && order.cart) {
            order.cart.forEach(item => {
                total += item.totalPrice || 0;
            });
        }

        if (order && order.priorityPrice) {
            total += order.priorityPrice;
        }

        return total;
    };

    const totalOrderPrice = calculateOrderTotal();

    return (
        <div className="container">
            <div className="header">
                <Title className="order-title" text={`Order # ${id} status: ${order.status}`} />
                <div className="badges">
                    {order.priority && <span className="badge badge-priority">PRIORITY</span>}
                    <span className="badge badge-preparing">PREPARING ORDER</span>
                </div>
            </div>

            <div className="time-banner">
                <div className="time-left">
                    Only {minutesPassed} minutes left 😃
                </div>
                <div className="estimated-time">
                    (Estimated delivery: {formatEstimatedDelivery(order.estimatedDelivery)})
                </div>
            </div>

            <div className="order-details">
                {order.cart.map((item) => (
                    <div key={item.pizzaId} className="pizza-status">
                        <div className="pizza-header">
                            <span className="pizza-name">{item.quantity}× {item.name}</span>
                            <span className="pizza-price">€{item.totalPrice}</span>
                        </div>
                        <div className="ingredients">
                            {item.addIngredients && item.addIngredients.length > 0
                                ? item.addIngredients.join(", ")
                                : "No ingredients available"}
                        </div>
                    </div>
                ))}
            </div>

            <div className="price-breakdown">
                <div className="price-item">
                    <span className="price-label">Price pizza:</span>
                    <span className="price-value">€{totalOrderPrice.toFixed(2)}</span>
                </div>
                {order.priorityPrice && (
                    <div className="price-item">
                        <span className="price-label">Price priority:</span>
                        <span className="price-value">€{order.priorityPrice}</span>
                    </div>
                )}
                <div className="price-item">
                    <span className="price-label">To pay on delivery:</span>
                    <span className="price-value">€{totalOrderPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Status;
