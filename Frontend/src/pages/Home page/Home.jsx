import React, { useEffect } from 'react'
import video from '../../assets/homevideo.mp4'
import './home.css'
import GetStartedBtn from './GetStartedBtn'
import Elevate from './Elevate'
import Advertise from './Advertise'
import Support from '../Support page/Support'
import Numbers from '../../components/Numbers'
import About from '../../components/about/About'
import FAQ from '../../components/FAQ/FAQ'
import TopProduct from '../Product page/TopProduct'
import { useOutletContext } from 'react-router'
import Order from '../MyOrder/Order'
function Home() {
  const context=useOutletContext()
  useEffect(()=>{
    if(localStorage.getItem('user')) context.setLogged(true)
  },[])
console.log(context.logged)
  return (
    <>
   
      <div className='video-container'>
        <div className='video-text'>
          <h1 className='video-text1'> Unlock Limitless </h1>
          <h1 className='video-text1'>Networking </h1>
          <h1 className='video-text1'>Possibilities with Zooq</h1>
          <p className='video-text2'>
            Experience the future of networking with Zooq – where <br /> your business card goes digital, seamless, and eco- <br /> friendly.
          </p>
          <GetStartedBtn/>
        </div>
        <video autoPlay muted loop width="640" height="640" className='autoVideo' >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <Elevate/>

      <Advertise/>
      <Numbers/>
      <TopProduct/>
      <About/>
      <FAQ/>
      <Support/>
  
    </>
  )
}

export default Home