import React from 'react'
import './about.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
function About() {

    const slider = [
        {
            'img': "src/assets/slid1.webp",
            'content': "One of the best decisions I have made for my company was working with zooq. They were able to meet all of my needs and exceeded all my expectations",
            'name': "LCS  Sri Vishnu",
            'position': "Vice President, Wockhardt",

        },
        {
            'img': "src/assets/slid2.webp",
            'content': "Zooq's QR code scanning made exchanging information effortless. My contacts appreciate the simplicity, and I love the real-time updates. The secure payment integration is a bonus. Zooq truly simplifies and enhances my networking.",
            'name': "Sarah M. Johnson",
            'position': "Enterpreneur",
        },
        {
            'img': "src/assets/slid3.webp",
            'content': " Zooq has been my favorite for the past few years. I've never had any issues with their service. They're quick and timely, which is everything I need from a company like them. ",
            'name': "Chick N Delish",
            'position': "Owner, Chick N Delish",
        }
    ]


    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 8000,
        cssEase: "linear"
    };
    const stars = Array(5).fill(0)
    return (
        <>
            <div className='uses'>
                <div className='uses-who'>
                    <h1>Who Uses Zooq?</h1>
                    <p>Zooq is the preferred choice for a diverse range of professionals and businesses. Entrepreneurs, startups, sales professionals, creatives, executives, freelancers, networking enthusiasts, and sustainable businesses leverage Zooq's Innovative digital business cards for impactful and efficient networking.</p>
                </div>
                <div className='uses-card'>
                    <div className='card'>
                        <div className='card-img-ab'>

                            <img src="src\assets\enterpre.webp" style={{ width: '250px', height: 'auto' }} alt="" />
                        </div>
                        <h3>Enterpreners & Startups</h3>
                        <p>Empower your brand. Entrepreneurs and startups leverage Zooq for dynamic digital business cards that make a memorable first Impression, fostering valuable connections.</p>
                    </div>
                    <div className='card'>
                        <div className='card-img-ab'>

                            <img src="src\assets\real.webp" alt="" />
                        </div>
                        <h3>Real Estate</h3>
                        <p>With Zooq's digital business cards, real estate agents can showcase property listings, contact details, and professional Information in a sleek and modern format.</p>
                    </div>
                    <div className='card'>
                        <div className='card-img-ab'>

                            <img src="src\assets\sales.webp" alt="" />
                        </div>
                        <h3>Sales Professionals</h3>
                        <p>Streamline your networking efforts. Sales professionals utilize Zooq to exchange information effortlessly, leaving a lasting impact on potential clients and collaborators.</p>
                    </div>
                </div>
            </div>


            <div className='saying'>
                <h2>What people are saying about Us</h2>
                <Slider {...settings} className='saying-slider'>
                    {
                        slider.map((det, key) => (
                            <div className='say-container' key={key}>
                                <div className='say-1'>

                                        <div className='say-content'>
                                            <p> "{det.content}"</p>
                                            <p style={{padding:'10px 0'}}>  {
                                                stars.map((_, index) => {
                                                    return <FaStar key={index} style={{ color: 'blue' }} />
                                                })
                                            }</p>
                                        </div>
                                        <div style={{ width: '30%' }}>

                                            <div className='say-img'>
                                                <img src={det.img} alt="" />

                                                <h4>{det.name}</h4>
                                                <p>{det.position}</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default About