import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
function Contact() {
  return (
    <div id='contact' className='contact'>
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-email">
            <span className="telegram-icon"><FaTelegramPlane/></span>
            <a className='email-text' href={`mailto:${'emran.yonas@aait.edu.et'}`}>Contact@emran.yonas@aait.edu.et</a>
        </div> 
        <div className="contact-telephone">
            <span className="telephone-icon"><BsFillTelephoneOutboundFill/></span>
            <a className='telephone-text' href="tel:+251988216467">+251 988 216 467</a>
        </div>
        <div className="reach-me">
            <a href='#' className="reach-me-on">
                <FiTwitter/>
           </a>
            <a href='#'  className="reach-me-on">
                <AiOutlineLinkedin/>
           </a>
            <a href='#'  className="reach-me-on">
                <BsFacebook/>
           </a>
            <a href='#'  className="reach-me-on">
                <AiOutlineInstagram/>
           </a>
        </div>
        <form action="" className="my-form">
            <input type='text' className='Name'placeholder='Your Name'/>
            <input type='email' className='Name'placeholder='Your Email'/>
            <textarea placeholder='Your Message' className='text-area'></textarea>
            <button className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact