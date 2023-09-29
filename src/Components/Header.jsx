import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

function Header() {
  const [active,setActive] = React.useState('nav--menu')
  const [toggleIcon,setToggleIcon] = React.useState('nav--toggler')
  const navToggler = () =>{
    active === 'nav--menu' ? setActive('nav--menu nav--active') : setActive('nav--menu')
    toggleIcon === 'nav--toggler' ? setToggleIcon('nav--toggler toggle'): setToggleIcon('nav--toggler')
     
  }
  return (
    <nav className='nav'>
        <div className='titles'>
            <h2 className='header-title'>Digital</h2>
            <h2 className='title-tobeWhite'> Portfolio</h2>
        </div>
          <ul className={active}>
            <li onClick={navToggler} className="nav--item"><a href="#Home" className="nav--link">Home</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#About" className="nav--link">About</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#skill" className="nav--link">Skills</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#projects" className="nav--link">Projects</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#certificate" className="nav--link">Certifications</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#contact" className="nav--link">Contact</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#footer" className="nav--link">Footer</a></li>
          </ul>
            <div onClick={navToggler} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          
        {/* <div className='Navbar'><FaBars/></div> */}
        
    </nav>
  )
}

export default Header