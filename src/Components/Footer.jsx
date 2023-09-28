import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
function Footer() {

  return (
    <footer id='footer' className='footer'>
        <div className='titles'>
            <h2 className='header-title'>Digital</h2>
            <h2 className='title-tobeWhite'> Portfolio</h2>
        </div>
        <div className="about-on-footer">
            <h3 className="about-on-footer-title">About</h3>
            <p className="about-on-footer-paragraph">I'm Emran, a passionate frontend engineer and software engineering student with a keen interest in coding and astronomy.</p>
        </div>
        <div className="footer-reach-me">
            <a href='#' className="footer-reach-me-on">
                <FiTwitter/>
           </a>
            <a href='#'  className="footer-reach-me-on">
                <AiOutlineLinkedin/>
           </a>
            <a href='#'  className="footer-reach-me-on">
                <AiOutlineInstagram/>
           </a>
        </div>
        <div className="quick-links">
            <h3 className="quick-links-title">Qucik Links</h3>
            <a href="#Home" className="quick-link">Home</a>
            <a href="#skill" className="quick-link">Skill</a>
            <a href="#projects" className="quick-link">Personal Projects</a>
            <a href="#certificate" className="quick-link">Certifications</a>
            <a href="#contact" className="quick-link">Contact Me</a> 
        </div>
        
    </footer>
  )
}

export default Footer