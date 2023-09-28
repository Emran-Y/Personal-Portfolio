import React from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
        <div className='titles'>
            <h2 className='header-title'>Digital</h2>
            <h2 className='title-tobeWhite'> Portfolio</h2>
        </div>
        <div className='Navbar'><FaBars/></div>
    </header>
  )
}

export default Header