import React from 'react'
import { Apple, Google, HeroImg, fb, ig, tw, li, topRightEllipse } from '../import'
import './Header.css'

export const Header = () => {


    return (
        <div className='header'>
            <div className='blue-rect'/>
                <div className='navbar'>
                    <div className='navbar-container'>
                        <div className='navbar-links'>
                            <p><a href="#Home">Home</a></p>
                            <p><a href='#About'>About</a></p>
                            <p><a href="#Testimonials">Testimonials</a></p>
                            <p><a href="#Contact">Contact</a></p>
                        </div>
                        <p className='logo'>smartHome</p>
                    </div>
                    <div className="navbar-sign">
                        <p>Login</p>
                        <button type="button">Sign up</button>
                    </div>
                </div>
                <div className='hero-heading'>
                    <p className='smart_home-title'>Smart Home<br/>Application</p>
                    <p className='smart_home-desc'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon <br/>him call mile. An pasture he himself believe ferrars besides cottage.</p>
                </div>
                <img className='hero_img' src={HeroImg}/>
                <img className='apple_img' src={Apple}/>
                <img className='google_img'src={Google}/>
                <div className='social-group'>
                    <a href='#'><img src={fb} alt='Facebook'/></a>
                    <a href='#'><img src={ig} alt='Instagram'/></a>
                    <a href='#'><img src={tw} alt='Twitter'/></a>
                    <a href='#'><img src={li} alt='LinkedIn'/></a>
                </div>
            <img className='topRightEllipse' src={topRightEllipse}/>
        </div>
    )
}
