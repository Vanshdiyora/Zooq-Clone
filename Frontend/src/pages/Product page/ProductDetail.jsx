import React, { useState } from 'react';
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './productDetail.css';
import { useCartContext } from '../../context/CartContext';
import { useProductContext } from '../../context/ProductContext';

function ProductDetail() {
    const {products}=useProductContext()
    const {addtocart}=useCartContext()
    const [isCompatibilityOpen, setCompatibilityOpen] = useState(false);
    const [isShippingOpen, setShippingOpen] = useState(false);
    const [amount,setAmount]=useState(1)
    const {id}=useParams(); 
    const toggleCompatibility = () => {
        setCompatibilityOpen(!isCompatibilityOpen);
    };

    const toggleShipping = () => {
        setShippingOpen(!isShippingOpen);
    };

    const increase=()=>{
        setAmount((prev)=>prev+1)
    }

    const decrease=()=>{
        if(amount>1)
        setAmount((prev)=>prev-1)
    }
    const product = products.find(item => item.id === parseInt(id, 10));
    if (!product) {
        return <div>Product not found</div>;
      }
      return (
        <div className='details'>
            <div className='detail-left'>
                <img src={product.image} />
            </div>
            <div className='detail-right'>
                <p className='ProductTitle'>{product.title}</p>
                <p className='price'>RS. {product.price}</p>
                <p className='quantity'>Quantity :</p>
                <div className='quantity-row'>
                    <div className='quantity-btn'>
                        <span onClick={increase}>+</span>
                        <span>{amount}</span>
                        <span onClick={decrease}>-</span>
                    </div>
                    <Link to='/cart' className='buy' onClick={()=>{addtocart(id,amount,product)}}>
                    Buy Now
                    </Link>
                </div>
                <div className='det'>
                    <div className='desc-prod'>
                        <p>Description</p>
                        <p style={{ color: '#6b6868' }}>{product.description}</p>
                    </div>

                    <div className='desc-prod'>
                        <div className='down' onClick={toggleCompatibility}>
                            <p style={{ padding: '10px 0' }}>Compatibility</p>
                            <span>
                                {isCompatibilityOpen ?
                                    <RxCaretUp style={{ fontSize: '25px', cursor: 'pointer' }} /> :
                                    <RxCaretDown style={{ fontSize: '25px', cursor: 'pointer' }} />
                                }
                            </span>
                        </div>
                        {isCompatibilityOpen && (
                            <p>
                                Elevate your professional connections with our Custom Digital Business Cards – designed for seamless compatibility. Whether on mobile, desktop, or web, your card ensures a smooth, user-friendly experience. Share effortlessly across email, social media, and messaging apps. The included QR code guarantees instant access and hassle-free networking at events. Experience compatibility like never before; make connections that leave a lasting impression.
                            </p>
                        )}
                    </div>

                    <div className='desc-prod'>
                        <div className='down' onClick={toggleShipping}>
                            <p style={{ padding: '10px 0' }}>Shipping and Returns</p>
                            <span>
                                {isShippingOpen ?
                                    <RxCaretUp style={{ fontSize: '25px', cursor: 'pointer' }} /> :
                                    <RxCaretDown style={{ fontSize: '25px', cursor: 'pointer' }} />
                                }
                            </span>
                        </div>
                        {isShippingOpen && (
                            <p>
                                Experience swift delivery and satisfaction with our shipping and returns policy. Once you customize your Digital Business Card, expect a prompt delivery to your inbox, ready for instant sharing. In the rare case of concerns, our hassle-free return process ensures your complete satisfaction. Your success is our priority, and we're committed to delivering quality and convenience.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
