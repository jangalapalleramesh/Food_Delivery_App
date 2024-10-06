import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
            The quick brown fox jumps over the lazy dog, showcasing agility and grace in every leap. Beneath the shade of ancient oaks, whispers of the past echo through the forest, telling tales of yore</p>
            <div className="footer-social-items">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+787887878</li>
                <li>jarvishhh@gmail.com</li>
            </ul>

        </div>
        </div>
        <div className="footer-copy-right">
            All Rights Reserved &copy; RRR
        </div>
        <hr/>
    </div>
  )
}

export default Footer
