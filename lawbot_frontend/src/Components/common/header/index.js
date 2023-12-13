import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <img src={logo} className='header-logo' />
        <div className='header-title'>LawBot</div>
    </div>
  )
}

export default Header