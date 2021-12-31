import React from 'react'
import { AboutCard1, AboutCard2, AboutCard3, Vector334 } from '../import'
import '../About/About.css'

export const About = () => {
    return (
            <div className='about-container'>
                <p className='about-container-heading'>About Us</p>
                <div className='about-card1-container'>
                    <div className='blue-rect1'/>
                    <img className='card1-img' src={AboutCard1}/>
                    <div className='about-group1'>
                        <p className='about-card-heading'>Smart Home’s  Smart Services</p>
                        <p className='about-card-desc'>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                        <button className='learn active'>Learn More</button>
                    </div>
                </div>
                <div className='about-card2-container'>
                    <div className='blue-rect2'/>
                    <img className='card2-img' src={AboutCard2}/>
                    <div className='about-group2'>
                        <p className='about-card-heading'>What app can do to your Appliances?</p>
                        <p className='about-card-desc'>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                        <button className='learn'>Learn More</button>
                    </div>
                </div>
                <div className='about-card3-container'>
                    <div className='blue-rect3'/>
                    <img className='card3-img' src={AboutCard3}/>
                    <div className='about-group3'>
                        <p className='about-card-heading'>Control Electric Appliances</p>
                        <p className='about-card-desc'>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                        <button className='learn'>Learn More</button>
                    </div>
                </div>
                <img className='vector334' src={Vector334}/>
            </div>
    )
}
