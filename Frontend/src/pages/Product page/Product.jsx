import React, { useRef } from 'react';
import './product.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartContext';
import { useProductContext } from '../../context/ProductContext';
import ReactLoading from 'react-loading';

function Product() {
  const { addtocart, isInCart } = useCartContext();
  const { products, ref, loading } = useProductContext();
  // console.log(loading);

  const notify = (item) => {
    if (!isInCart(item.id)) {
      addtocart(item.id, 1, item);
      toast.success(<div>Success<br />Successfully Added To Cart</div>, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'my-toast',
        bodyClassName: 'my-toast-body',
        progressClassName: 'my-toast-progress'
      });
    }
  };

  return (
    <div className='prod-container'>
      <h2 className='prod-head'>All Products</h2>
      <div className="prod-card-cont">
        {products.map((item, key) => (
          <div key={key} className='product-card'>
            <Link to={`/productview/${item.id}`}><img src={item.image} alt="" /></Link>
            <p className='title'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
            </p>
            <p className='price'>RS. {item.price}</p>
            <p className={isInCart(item.id) ? 'cart-btn-clicked' : 'cart-btn'} onClick={() => notify(item)}>Add to Cart</p>
          </div>
        ))}
      </div>

      <div ref={ref} style={{ height: '10px', color: 'blue'}}>
      <ReactLoading type={'spinningBubbles'} color={'black'} height={'20px'} width={'20px'} />
      more...</div>
      <ToastContainer />
    </div>
  );
}

export default Product;
