import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'
//import '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={logo} className='nav-logo' alt="" /> 
       
       <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
