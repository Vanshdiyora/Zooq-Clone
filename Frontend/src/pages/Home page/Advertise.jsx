import React from 'react'
import Choose from '../../assets/Choose_your_product.webp'
import Set from '../../assets/set up your profile_1.webp'
import Share from '../../assets/share it with everyone_1.webp'
import './advertise.css'
function Advertise() {
    return (
        <>
            <div className='adv-container'>
                <div className='adv-container-1'>
                    <h2>Unlocking Seamless Networking with Zooq</h2>
                    <p>Discover the simplicity behind Zooq's revolutionary approach to digital business cards. Learn how our intuitive features empower you to create, share, and connect effortlessly. Explore the step-by-step process of transforming your networking experience with Zooq.</p>
                </div>
                <div className='adv-container-2'>
                    <div className='adv-item'>
                        <div className='image_cont'>

                        <img src={Choose} style={{height:'auto'}}/>
                        </div>
                        <h4>Choose YourProduct</h4>
                        <p>Choose from a variety of smart products tailored to fit your lifestyle needs.</p>
                    </div>
                    <div className='adv-item'>
                        <div className='image_cont'>

                        <img src={Set} />
                        </div>
                        <h4>Set Up Your Profile</h4>
                        <p>Download our free App Available on App Store and Google Play.</p>
                    </div>
                    <div className='adv-item'>
                        <div className='image_cont'>

                        <img src={Share} />
                        </div>
                        <h4>Share it with Everyone</h4>
                        <p>Activate your product and you're all set !. Share your profile using your Zooq.</p>
                    </div>
                </div>
            </div>

            <div className='analytic'>
                <img src="src\assets\Analytics.webp" className="statsImg"alt="" />
                <div className='ana-right'>
                    <h2>
                        Craft Dynamic Cards and Analyze Strategic Insights"
                    </h2>
                    <p>
                        Unlock the Future of Networking with Zooq: Craft a dynamic digital identity that stands out in a touch. Customize your Zooq card and seamlessly integrate it into your networking strategy.

                    </p>
                    <p>
                        Gain valuable insights through Zooq Analytics, allowing you to track engagement and enhance your professional connections.
                    </p>
                    <div>
                    <img src="src\assets\apple.svg" alt="" />
                    <img src="src\assets\google.svg" alt="" />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Advertise