import React from 'react'
import "./component.css";
import { NavLink } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";
// {/* <FaWhatsappSquare /> */}

import { FaFacebook } from "react-icons/fa";
// {/* <FaFacebook /> */}

import { FaInstagramSquare } from "react-icons/fa";
<FaInstagramSquare />
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="socials">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://www.instagram.com/vivysfashionhouse/" target='blank'>Instagram</a></li>
          <li><a href="https://www.instagram.com/vivysfashionhouse/" target='blank'>Facebook</a></li>
          <li><a href="https://wa.me/8116070090?text=Hello,%20How%20can%20I%20help%20you?" target='blank'>WhatsApp</a></li>
          
        </ul>

      </div>
      <div className="allproducts">
        <h3>Products</h3>
        <ul>
          <li><NavLink to="/kid">Kids</NavLink></li>
          <li><NavLink to="/rtw">RTW</NavLink></li>
          <li><NavLink to="/bespoke">Bespokes</NavLink></li>
          
        </ul>
      </div>
      <div className="company">
        <h3>Company</h3>
        <ul>
          <li><NavLink to="aboutus">About Us</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
          <li><NavLink to="feedback">Feedback</NavLink></li>
          
        </ul>
      </div>
      
      
    </footer>
  )
}

export default Footer
