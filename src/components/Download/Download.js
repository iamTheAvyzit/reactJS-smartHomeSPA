import React from 'react'
import { AboutCard1, Apple, Google } from '../import'
import './Download.css'

export const Download = () => {
    return (
        <div className='download-container'>
            <div className='download-group'>
                <p className='download-header'>Download App</p>
                <p className='download-desc'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <img className='down-apple_img' src={Apple}/>
                <img className='down-google_img' src={Google}/>
            </div>
            <img className='download-card' src={AboutCard1}/>
        </div>
    )
}
