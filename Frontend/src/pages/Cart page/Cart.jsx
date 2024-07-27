import React, { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import './cart.css';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useOrderContext } from '../../context/OrderContext';
import { useRouterContext } from '../../context/RouterContext';

const orderInSchema = Yup.object({
  name: Yup.string().required('required'),
  state: Yup.string().required('required'),
  city: Yup.string().required('required'),
  mobileNumber: Yup.string().required('required'),
  pincode: Yup.string().required('required'),
  email: Yup.string().required('required'),
  address: Yup.string().required('required'),
});

const initialValues = {
  name: "",
  state: "",
  email: "",
  city: "",
  mobileNumber: "",
  pincode: "",
  address: "",
};

function Cart() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: orderInSchema,
    onSubmit: (values, action) => {
      initiatePayment(values);
    },
  });
  const {myOrders,addOrder}=useOrderContext()
  const {logged}=useRouterContext()
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { cart, shipping, removeItem, decrease, increase, total_item, total_price, clearCart } = useCartContext();
  const ship = cart.length === 0 ? 0 : shipping;

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initiatePayment = async (orderDetails) => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
  
    const options = {
      key: 'rzp_test_l3ltDvoKgIPmsQ',
      amount: Math.ceil((total_price + ship) * 100), // Amount in paise
      currency: 'INR',
      name: 'Zooq',
      description: 'Test Transaction',
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        handlePaymentSuccess(orderDetails, paymentId);
      },
      prefill: {
        name: orderDetails.name,
        email: orderDetails.email,
        contact: orderDetails.mobileNumber,
      },
      notes: {
        address: orderDetails.address,
      },
      theme: {
        color: '#F37254',
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  

  const handlePaymentSuccess = (orderDetails, paymentId) => {
    // Move cart items to orders
    const order = {
      orderDetails,
      items: cart,
      totalAmount: total_price + ship,
      paymentId: paymentId 
    };
  
      console.log('My order', order);
    addOrder(order)
    // localStorage.setItem('order',myOrders)
    navigate('/order');
  };
  

  return (
    <div className='cart-container'>
      <div className='cart-left'>
        {cart.length === 0 ? <div>Cart is empty</div> :
          cart.map((item, key) => (
            <div key={key}>
              <div className='item-cart'>
                <div style={{ display: 'flex', padding: '20px' }}>
                  <img src={item.image} style={{ width: '130px', height: '130px', marginRight: '20px' }} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <div className='qty'>
                      Qty.: <CiCircleMinus onClick={() => decrease(item.id)} style={{ color: 'red', margin: "10px 10px" }} />
                      <b>{item.amount}</b>
                      <CiCirclePlus onClick={() => increase(item.id)} style={{ color: 'green', margin: "10px 10px" }} />
                    </div>
                    <br />
                    Price: <b>₹ {item.price}/-</b>
                    <br />
                    Total Price: <b>₹ {item.amount * item.price}/-</b>
                  </div>
                </div>
                <div className='delete'>
                  <MdDelete className='del-btn' onClick={() => removeItem(item.id)} />
                </div>
              </div>
            </div>
          ))
        }
        <div className="cart-total">
          <p>Cart Subtotal: <b>₹ {total_price} /-</b></p>
          <p>Shipping: <b>₹ {ship} /-</b></p>
          <div className="cart-line-div">
            <p className="cart-line"></p>
          </div>
          <p><b>Cart Total: ₹ {total_price + ship}/-</b></p>
        </div>
      </div>
      <div className='cart-right'>
        <div className='proceed'>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '20px' }}>
              Cart Total: ({total_item} items): <b>₹ {total_price + ship}/-</b>
            </p>
          </div>
          <div>
            {!show ?
              <button className='checkout' onClick={() => setShow(true)}>Proceed to Checkout</button> :
              <div className="cart-form">
                <form onSubmit={handleSubmit}>
                  <div className='label-sign'>
                    <label>Name :</label>
                    <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                    {errors.name && touched.name ? (
                      <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                    ) : null}
                  </div>
                  <div className="sign_input_box">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='label-sign'>
                    <label>Email :</label>
                    <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                    {errors.email && touched.email ? (
                      <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                    ) : null}
                  </div>
                  <div className="sign_input_box">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='label-sign'>
                    <label>Address :</label>
                    <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                    {errors.address && touched.address ? (
                      <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                    ) : null}
                  </div>
                  <div className="sign_input_box">
                    <textarea
                      style={{ border: '0' }}
                      type="text"
                      placeholder="Enter Your Address"
                      name="address"
                      value={values.address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='two-input'>
                    <div>
                      <div className='label-sign'>
                        <label>City:</label>
                        <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                        {errors.city && touched.city ? (
                          <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                        ) : null}
                      </div>
                      <div className="sign_input_box">
                        <input
                          type="text"
                          placeholder="Enter City"
                          name="city"
                          value={values.city}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='label-sign'>
                        <label>State:</label>
                        <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                        {errors.state && touched.state ? (
                          <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                        ) : null}
                      </div>
                      <div className="sign_input_box">
                        <input
                          type="text"
                          placeholder="Enter State"
                          name="state"
                          value={values.state}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='label-sign'>
                    <label>Pincode:</label>
                    <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                    {errors.pincode && touched.pincode ? (
                      <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                    ) : null}
                  </div>
                  <div className="sign_input_box">
                    <input
                      type="text"
                      placeholder="Enter Your Pincode"
                      name="pincode"
                      value={values.pincode}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='label-sign'>
                    <label>Mobile No.:</label>
                    <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                    {errors.mobileNumber && touched.mobileNumber ? (
                      <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                    ) : null}
                  </div>
                  <div className="sign_input_box">
                    <input
                      type="text"
                      placeholder="Enter Your Mobile No."
                      name="mobileNumber"
                      value={values.mobileNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="cart_form_button">
                    <div>
                      <button className="order_button" type="button" onClick={() => setShow(false)}>Back to cart</button>
                    </div>
                    <div>
                      {logged?<button className="order_button" type="submit">Place Now</button>
                       : <Link to={'/login'}><button className="order_button" type="button">Place Now</button></Link>} 
                    </div>
                  </div>
                  <ToastContainer />
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
