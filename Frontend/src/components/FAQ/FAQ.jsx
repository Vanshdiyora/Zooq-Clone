import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
    const [selected, setSelected] = useState(null)
    const qAa = [
        {
            question: "What makes Zooq's digital business cards unique?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        },
        {
            question: "How does the Smart Tap feature work?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        },
        {
            question: "Can I integrate payment options into my Zooq card?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        },
        {
            question: "How do I track the performance of my digital business card?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        },
        {
            question: "Is my information secure on Zooq's platform?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        },
        {
            question: "Are Zooq digital cards compatible with all devices?",
            answer: "Zooq cards are unique due to their complete customization options, allowing you to tailor every aspect to reflect your brand. Real-time updates ensure your information is always current, and the sleek, modern design sets you apart in the professional world."
        }
    ]
    function toggle(i) {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='faq'>
            <h1>Frequently Asked Question's</h1>
            {
                qAa.map((item, key) => {
                    return <div key={key} className='faq-container' >
                        <div className={selected === key ? 'question select' : 'question'} onClick={() => toggle(key)}>
                            <p>{item.question}</p>
                            <span className='plus-btn'>{selected === key ?
                                <span style={{ fontSize: '50px', color: '#a3a3a3', width: '30px' }}>-</span>
                                : '+'}</span>
                        </div>
                        <div className={selected === key ? 'answer show' : 'answer'}>
                            {item.answer}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default FAQ