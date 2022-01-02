import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer' id='Contact'>
            <div className='footer-links'>
                <div className='footer-group'>
                    <p className='footer-header'>smartHome</p>
                    <p className='footer-desc'>Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
                    <input className='email' type='email' placeholder='Your email address here...'/>
                    <button className='register'>Register</button>
                </div>
                <div className='footer-categories'>
                    <div className='fc-header'>CATEGORIES</div>
                    <p>Product Management</p>
                    <p>Design / Creatives</p>
                    <p>Education & Training</p>
                    <p>UI/UX Designers</p>
                    <p>Development</p>
                    <p>Customer Support</p>
                </div>
                <div className='footer-about'>
                    <div className='fc-header'>ABOUT</div>
                    <p>About Us</p>
                    <p>Finance Experts</p>
                    <p>Partnerships</p>
                    <p>Project Management</p>
                    <p>The Team</p>
                </div>
                <div className='footer-follow'>
                    <div className='fc-header'>Follow Us</div>
                    <p>Meta</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className='footer-end-bar'>Copyright © 2022 all rights reserved smartHome</div>
        </div>
    )
}
