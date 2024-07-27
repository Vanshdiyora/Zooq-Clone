import React, { useEffect, useState } from 'react';
// import Logo from 'D:/Vansh/JS project/Zooq clone/src/assets/logo.svg';
import { Link, NavLink, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsGrid3X3Gap } from 'react-icons/bs';
import './header.css';
import { useCartContext } from '../../context/CartContext';
import { RxCross2 } from 'react-icons/rx';
import { useRouterContext } from '../../context/RouterContext';

function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { total_product } = useCartContext();
  const { name, setName, logged, setLogged } = useRouterContext()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    setLogged(true);
  }, [setLogged]);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem('user'))
    console.log(d)
    setName(d.data.tokenObject.firstName  )
  }, [])

  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto' });
      }
    }
    setMenu(false); // Close the menu after clicking on a link
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  const getNavLinkClass = (link) => {
    return 'header-link';
  };
  const [showSign, setShowSign] = useState(false)
  const removeLogin = () => {
    setLogged(false)
  }
  return (
    <div className='header'>
      <div className='header-main'>
        <div className="header-container">

        
          <img src={"src/assets/logo.svg"} alt="Logo" />
          <ul className={menu ? 'header-menu' : 'header-center'}>
            <div className={'cross-btn'}>
              <RxCross2 onClick={() => setMenu(false)} className='CrossButton' />
            </div>
            <li>
              <NavLink to='/' className={'header-link'} onClick={() => { menu ? setMenu(!menu) : '' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' className={'header-link'} onClick={() => { menu ? setMenu(!menu) : '' }}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="support"
                onClick={(e) => handleAnchorClick(e, 'support')}
                className={getNavLinkClass('support')}
              >
                Support
              </NavLink>
            </li>
            <li>
              {menu ? logged?<div className="header-link" onClick={()=>{setLogged(false)}} style={{ color: 'white' }}>Sign Out</div>:<NavLink to='/login' className="header-link" style={{ color: 'white' }}>Login</NavLink> :
                <NavLink
                  to="contactus"
                  onClick={(e) => handleAnchorClick(e, 'contactus')}
                  className={getNavLinkClass('contactus')}
                >
                  Contact Us
                </NavLink>
              }
            </li>
            {logged ? menu ? null : <li>
              <NavLink
                to="/order"
                className={'header-link'}
              >
                My Order
              </NavLink>
            </li> : null}

          </ul>
          <div className='header-container-right'>
            <BsGrid3X3Gap className='GridButton' onClick={() => setMenu(!menu)} />
            <div className='header-right'>
              {!logged ? <li>
                <NavLink to='/login' className="header-link" id='login'>Login</NavLink>
              </li> : <div><li className='header-link' style={{ cursor: 'pointer' }} onClick={() => setShowSign(!showSign)}>Hello, {name}</li>
                {showSign ? <div className='sign-out-btn'><p style={{ color: 'white', margin: '0' }} onClick={removeLogin}>Sign Out</p></div> : null}
              </div>}
              <Link to='/cart' className={'cart-header'}>
                <FiShoppingCart className='header-cart-icon' />
                <span className='cart-num'>{total_product}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
