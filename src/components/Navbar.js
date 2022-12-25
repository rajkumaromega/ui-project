import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>Portfolio Creator<span class="color-dot">.</span></div>
        <div className ="navLinks">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">Blog</a>
            <a href="">Book a call </a>
            <a><AiOutlineArrowRight className=' btn arrow-side'/></a>
           
        </div>
    </div>
  )
}

export default Navbar