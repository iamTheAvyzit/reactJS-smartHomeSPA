import React from 'react'
import { TestCards, Slider } from '../import'
import './Testimonials.css'

export const Testimonials = () => {
    return (
        <div className='test-container' id='Testimonials'>
            <p className='header'>Testimonials</p>
            <p className='desc'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon <br/>him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <img className='test-cards' src={TestCards}/>
            <img className='slider' src={Slider}/>
        </div>
    )
}
