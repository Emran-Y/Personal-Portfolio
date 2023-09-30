import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { MdWorkspacePremium } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { RiContactsBook2Line } from 'react-icons/ri';
import { AiOutlineArrowDown } from 'react-icons/ai';
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
            <li onClick={navToggler} className="nav--item"><a href="#Home" className="nav--link"> <FaHome className='bar-icons'/>Home</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#about" className="nav--link"> <BsFillPersonFill className='bar-icons'/>About</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#skill" className="nav--link"><GiSkills className='bar-icons'/>Skills</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#projects" className="nav--link"><GoProjectSymlink className='bar-icons'/>Projects</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#certificate" className="nav--link"><MdWorkspacePremium className='bar-icons'/>Certifications</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#contact" className="nav--link"><RiContactsBook2Line className='bar-icons'/>Contact</a></li>
            <li onClick={navToggler} className="nav--item"><a href="#footer" className="nav--link"><AiOutlineArrowDown className='bar-icons'/>Footer</a></li>
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