import React from 'react';
import './order.css';
import { useOrderContext } from '../../context/OrderContext';

function Order() {
    const { myOrders } = useOrderContext();
    console.log("in order", myOrders);

    return (
        <div className='order-container'>
            <div className='order-title'>My Orders</div>
            {
                [...myOrders].reverse().map((order, orderIndex) => (
                    <div key={orderIndex} className='order'>
                        <div className='order-details'>
                            <p><strong>Payment ID:</strong> {order.paymentId}</p>
                            <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
                        </div>
                        <div className='order-items'>
                            {order.items.map((item, itemIndex) => (
                                <div key={itemIndex} className='order-item'>
                                    <img src={item.image} alt={`item-${item.id}`} />
                                    <p><strong>Price:</strong> ${item.price}</p>
                                    <p><strong>Amount:</strong> {item.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Order;
