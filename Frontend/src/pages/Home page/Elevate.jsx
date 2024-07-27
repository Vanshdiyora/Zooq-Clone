import React, { useState } from 'react';
import './home.css';
import tap from '../../assets/tap.webp';
import tap_h from '../../assets/tap_h.webp';
import pay from '../../assets/pay.webp';
import pay_h from '../../assets/pay_h.webp';
import scan from '../../assets/scan.webp';
import scan_h from '../../assets/scan_h.webp';

import GetStartedBtn from './GetStartedBtn';

function Elevate() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const content = [
        {
            image: tap,
            hoverImage: tap_h,
            heading: 'Tap',
            desc: "Instantly connect with a touch. Zooq's Smart Tap fosters swift, memorable networking experiences."
        },
        {
            image: scan,
            hoverImage: scan_h,
            heading: 'Scan',
            desc: "Effortlessly share details via QR code. Zooq makes networking easy, contactless, and eco-friendly."
        },
        {
            image: pay,
            hoverImage: pay_h,
            heading: 'Pay',
            desc: "Seamless transactions integrated into your card. Zooq transforms networking, making payments secure and efficient."
        }
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='elevate'>
            <div className='elevate-right'>
                <h2 className='elevate-heading'>Elevate Networking with Zooq's Innovative Features</h2>
                <p>Experience seamless networking with Zooq's innovative features. Tap for instant connections, scan QR codes effortlessly, and integrate secure payments into your digital business card. Elevate your professional interactions with the power of Zooq.</p>
                <p>Stand out with fully customizable digital business cards. Tailor your card to reflect your brand, update details in real-time, and make a lasting impression that evolves with your business.</p>
                <GetStartedBtn />
            </div>
            <div className='elevate-left'>
                {content.map((ele, index) => (
                    <div
                        key={index}
                        className='property-item'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={hoveredIndex === index ? ele.hoverImage : ele.image}
                            alt={ele.heading}
                        />
                        <div>
                            <h4 className='ele-head'>{ele.heading}</h4>
                            <p>{ele.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Elevate;
