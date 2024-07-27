import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { useRouterContext } from '../../context/RouterContext'
function Footer() {

  const {logged,name,setLogged}=useRouterContext()

  return (
        <section id='contactus'>
    <div className='footer-container'>


    <footer>
      <div className='row'>
        <div className='foot-detail'>
          <div><img src="src\assets\zooq_white_logo.svg" style={{ width: '110px', paddingBottom: '10px' }} alt="" /></div>
          <p style={{fontSize:'16px'}}>Experience the future of networking with ZOOQ where your business card goes digital, seamless, and eco-friendly.</p>
          <div>
            <h3 style={{fontSize:'22px'}}>

              Download Our App On
            </h3>
            <div className='storeLogo'>
              <img src="src\assets\AppStore.webp"  alt="" />
              <img src="src\assets\PlayStore.webp"  alt="" />
            </div>
          </div>
        </div>
        <div className='contact'>
          <h3>Contact Us</h3>
          <div className='contact-detail'>
            <img src="src\assets\mail.svg" alt="" />
            <p>zooq.par@gmail.com</p>
          </div>
          <div className='contact-detail'>
            <img src="src\assets\call.svg" alt="" />
            <p>+91 91064 28617</p>
          </div>
          <div className='contact-detail'>
            <img src="src\assets\location.svg" alt="" />
            <p>8th Floor, 802-810, APMC Krushi Bazaar, Ring Road, Surat, Gujarat-395002
            </p>
          </div>
        </div>
        <div className='menu'>
          <div className='menu-left'>
              <li><Link to='/' style={{ fontWeight: 700, color: 'white' }}>Home</Link></li>
              <li><Link to='/products'>Products</Link></li>
              <li><Link to='#support'>Support</Link></li>
          </div>
          <div className='menu-right'>
              {logged?
              <li onClick={()=>setLogged(false)} style={{cursor:'pointer' ,color:"#c5c4c4"}}>{name}, Sign out</li>
              :<div><li><Link to='/login'>Login</Link></li>
              <li><Link to='/sign'>Sign Up</Link></li></div>}
              
              <li><Link to='/privacy'>Privacy Policy</Link></li>
              <li><Link to='/terms'>Terms & Conditions</Link></li>
          </div>
        </div>
      </div>
      <div className='borderTop'>
        <div className='copyright'>
          <p>© 2024 Zooq. All Rights Reserved.</p>
        </div>

      </div>

    </footer>
    </div>
        </section>
  )
}

export default Footer



