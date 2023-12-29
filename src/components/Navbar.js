import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='dhimotif'></div>
        <div className='nav-content'>
            <button className='nav-button' id='Publications'>PUBLICATIONS</button>
            <button className='nav-button' id='Designs'>DESIGNS</button>
            <button className='nav-button' id='Achievements'>ACHIEVEMENTS</button>
            <button className='nav-button' id='Contact'>CONTACT</button>
        </div>
            <div className='icon'> </div>
    </div>
  )
}

export default Navbar
