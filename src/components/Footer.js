import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>New York,NY</p>
                        <p>New York City</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/> 718-930-5648</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>annopeyemi@gmail.com</h4>
                
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Hi I am Ann Opeyemi, I am your next Frontend Developer
                    I enjoy discussing new projects and design challenges.
                </p>
                <div className="social">
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
