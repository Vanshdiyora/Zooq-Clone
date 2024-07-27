import React, { useState } from 'react';
import '../Home page/home.css';
import './support.css';

function Support() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleInput(e) {
    const { name, value } = e.target;
    // console.log(name,value)
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    Object.values(values).forEach((value) => {
      // console.log(value)
      if (!value) {
        valid = false;
      }
    });
    if (!valid) {
      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          setErrors((prevErrors) => ({ ...prevErrors, key: 'This field is required' }));
        }
      });
      return;
    }
    setSubmitted(true);

    setValues({ name: '', email: '', msg: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className='support-cont'>

      <section id='support'>
        <div className='support-s'>
          <div className='support-content'>
            <h2>Get in Touch with Us</h2>
            <p>We'd love to hear from you!</p>
            <div className='form-s'>

            <form onSubmit={handleSubmit}>
              <div className='input-text'>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleInput}
                    onBlur={handleBlur}
                    value={values.name}
                    />
                  {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                <div className='input-wrapper'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    onChange={handleInput}
                    onBlur={handleBlur}
                    value={values.email}
                    />
                  {errors.email && <span className='error'>{errors.email}</span>}
                </div>
              </div>
              <div className='msg'>
                <input
                  className='msg-input'
                  name='msg'
                  type='text'
                  placeholder='Message'
                  onChange={handleInput}
                  onBlur={handleBlur}
                  value={values.msg}
                  />
                {errors.msg && <span className='error'>{errors.msg}</span>}
              </div>
              <button className='video-btn'>Send</button>
              {submitted && <p className='success-message'>Thank you for your message!</p>}
            </form>
                  </div>
          </div>
          <div className='support-right'>

          <img  src="src\assets\support.webp" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
