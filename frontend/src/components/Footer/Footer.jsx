import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}/>
            <p>At Dilan Bakery, we blend taste and quality to perfection. Our selection of breads, cakes, and pastries are crafted with the finest ingredients and a touch of love. Every bite of our products reflects our dedication to providing the best for our customers. Visit us and indulge in an unforgettable culinary experience. </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Polocy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>021-829-2729</li>
                <li>contact@dilanbakery.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ©️ DilanBakery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
