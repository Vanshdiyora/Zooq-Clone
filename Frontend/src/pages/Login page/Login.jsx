import React, { useState } from 'react';
import './login.css';
import { CiMail } from "react-icons/ci";
import { AiFillUnlock } from "react-icons/ai";
import ZooqLogo from '../../assets/zooq_white_logo.svg';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import { logInSchema } from './Yup';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useRouterContext } from '../../context/RouterContext';

const initialState = {
  email: "",
  password: ""
};

const Login = () => {
  const navigate = useNavigate();
  const {logged,setLogged}=useRouterContext()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: logInSchema,
    onSubmit: async (values, actions) => {
      if (!errors.email && !errors.password) {
        console.log(values);
        
        try {
          let response = await axios.post('http://localhost:8000/api/login', values);
          if (response.status === 200) {
            localStorage.setItem('user',JSON.stringify(response))

            setLogged(true)
            toast.success("Login Successful", {
              autoClose: 5000, // 5 seconds
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              className: 'my-login',
            });
            actions.resetForm();
            // console.log(response.data);
            setTimeout(() => navigate('/'), 1000)
          }
        }
        catch (error) {
          if (error.response.data) {
            toast.error(error.response.data.message || "Error during login", {
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              className: 'my-login',
            });
          } else {
            console.log("Error during login:", error);
            toast.error("Error during login", {
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              className: 'my-login',
            });
          }
          console.error("Error during login:", error);
        }
      }
    }
  });

  return (
    <div className='warp'>
      <div className="wrapper">
        <div className="login-container">
          <div className="login-left">
            <div className="login-cover">
              <div className="login">Log in</div>
              <div style={{ border: '2px solid black', width: '30px' }}></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="Login_input_box">
                <CiMail color="#000" style={{ fontSize: '30px', fontWeight: 'bold' }} />
                <input
                  type="text"
                  name='email'
                  placeholder="Enter your email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {errors.email && touched.email?<p style={{fontSize:'14px',padding:'0',margin:'0',color:'red'}}>{errors.email}</p>:''}
              <div className="Login_input_box">
                <AiFillUnlock color="#000" style={{ fontSize: '30px', fontWeight: 'bold' }} />
                <input
                  type="password"
                  name='password'
                  autoComplete=''
                  placeholder="Enter your password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {errors.password && touched.password?<p style={{fontSize:'14px',padding:'0',margin:'0',color:'red'}}>required</p>:''}

              <div className="Login_input_button" >
                <button className="Login_button" type="submit">Log in</button>
                <ToastContainer />
              </div>
            </form>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              If you have not an account? <Link to="/sign">Register now</Link>
            </div>
          </div>
          <div className="login-right">
            <img src={ZooqLogo} alt="Zooq Logo" />
            <p>Let's get connected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
