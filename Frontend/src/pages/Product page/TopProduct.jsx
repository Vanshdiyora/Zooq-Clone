import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProductContext } from '../../context/ProductContext';

function TopProduct()  {
  const { ourProduct } = useProductContext()
  const tproducts = ourProduct;
  console.log(tproducts)
  const { addtocart, isInCart } = useCartContext()
  const notify = (item) => {
    if (!isInCart(item.id)) {
      addtocart(item.id, 1, item);
      toast.success(<div>Success<br />Successfully Added To Cart</div>, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'my-toast my-toast-success',
        bodyClassName: 'my-toast-body',
        progressClassName: 'my-toast-progress'
      });
    }
  };
  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}> Our Products</h2>
        <p style={{ textAlign: 'center' }}>Explore Zooq's suite of innovative products designed to revolutionize your professional interactions.</p>
      </div>
      <div className='prod-container' >
        <div className="prod-card-cont">
          {tproducts.map((item, key) => (
            <div key={key} className='product-card'>
              <Link to={`/productview/${item.id}`}><img src={item.image} alt="" /></Link>
              <p className='title'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</p>
              <p className='price'>RS. {item.price}</p>
              <p className={isInCart(item.id) ? 'cart-btn-clicked' : 'cart-btn'} onClick={() => notify(item)}>Add to Cart</p>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default TopProduct