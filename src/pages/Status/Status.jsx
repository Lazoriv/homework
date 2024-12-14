import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import './Status.css';

const Status = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <div className="header">
                <Title className="order-title" text={`Order # ${id} status: preparing`} />
                <div className="badges">
                    <span className="badge badge-priority">PRIORITY</span>
                    <span className="badge badge-preparing">PREPARING ORDER</span>
                </div>
            </div>

            <div className="time-banner">
                <div className="time-left">
                    Only 49 minutes left 😃
                </div>
                <div className="estimated-time">
                    (Estimated delivery: Dec 12, 01:37 PM)
                </div>
            </div>

            <div className="order-details">
                <div className="pizza-item">
                    <div className="pizza-header">
                        <span className="pizza-name">1× Margherita</span>
                        <span className="pizza-price">€12.00</span>
                    </div>
                    <div className="ingredients">
                        Tomato, Mozzarella, Basil
                    </div>
                </div>
            </div>

            <div className="price-breakdown">
                <div className="price-item">
                    <span className="price-label">Price pizza:</span>
                    <span className="price-value">€12.00</span>
                </div>
                <div className="price-item">
                    <span className="price-label">Price priority:</span>
                    <span className="price-value">€2.00</span>
                </div>
                <div className="price-item">
                    <span className="price-label">To pay on delivery:</span>
                    <span className="price-value">€14.00</span>
                </div>
            </div>
        </div>
    );
};

export default Status;
