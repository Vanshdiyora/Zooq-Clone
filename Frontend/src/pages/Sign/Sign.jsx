import React from 'react';
import './sign.css';
import { Link, useNavigate } from 'react-router-dom';
import ZooqLogo from '../../assets/zooq_white_logo.svg';
import * as Yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const signInSchema = Yup.object({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  mobileNumber: Yup.string().required('required'),
  email: Yup.string().required('required'),
  password: Yup.string().required('required'),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobileNumber: "",
};

const Sign = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, action) => {
      console.log("values", values);

      try {
        const response = await axios.post('http://localhost:8000/api/register', values);
        if (response.status === 200) {
          // localStorage.setItem('user',JSON.stringify(response))
          toast.success("Registration Successful", {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'my-login',
          });
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        }
      } catch (error) {
        console.log(error.response.data.message);
        if (error.response.data) {
          toast.error(error.response.data.message || "Error during registration", {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'my-login',
          });
        } else {
          console.log("Error during registration:", error);
          toast.error("Error during registration", {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'my-login',
          });
        }
      }
    },
  });

  return (
    <div className='warp'>
      <div className="wrapper">
        <div className="sign-container">
          <div className='sign-left-container'>
            <div className="sign-left">
              <div className="login-cover">
                <div className="login">Sign Up</div>
                <div style={{ border: '2px solid black', width: '30px' }}></div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='label-sign'>
                  <label>First Name :</label>
                  <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                  {errors.firstName && touched.firstName ? (
                    <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                  ) : null}
                </div>
                <div className="sign_input_box">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>

                <div className='label-sign'>
                  <label>Last Name :</label>
                  <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                  {errors.lastName && touched.lastName ? (
                    <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                  ) : null}
                </div>
                <div className="sign_input_box">
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={values.lastName}
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

                <div className='label-sign'>
                  <label>Password :</label>
                  <span style={{ paddingLeft: '10px', color: 'red' }}>*</span>
                  {errors.password && touched.password ? (
                    <span style={{ fontSize: '14px', paddingLeft: '30px', color: 'red' }}>required</span>
                  ) : null}
                </div>
                <div className="sign_input_box">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <div className="Login_input_button">
                  <button className="Login_button" type="submit">Register now</button>
                  <ToastContainer/>
                </div>
              </form>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                Already have an account? <Link to="/login">Log In now</Link>
              </div>
            </div>
          </div>

          <div className="login-right">
            <img src={ZooqLogo} alt="Zooq Logo" />
            <p>Sign Up - Let's get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
