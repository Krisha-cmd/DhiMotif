import React from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  return (
    <div>
        <div className='dhimotif'></div>
    <div className='navbar'>
        <div className='nav-content'>
            <button className='nav-button' id='Publications'><Link to="publications" smooth={true} duration={500}>PUBLICATIONS</Link></button>
            <button className='nav-button' id='Designs'><Link to="designs" smooth={true} duration={500}>DESIGNS</Link></button>
            <button className='nav-button' id='Achievements'>ACHIEVEMENTS</button>
            <button className='nav-button' id='Contact'>CONTACT</button>
        </div>
            <div className='icon'> </div>
    </div>

    </div>
  )
}

export default Navbar
