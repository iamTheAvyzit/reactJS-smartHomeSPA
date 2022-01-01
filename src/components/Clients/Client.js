import React from 'react'
import {Logos, RightMidDecor} from '../import'
import './Client.css'

export const Client = () => {
    return (
        <div className='client-container'>
            <p className='header'>Our Clients</p>
            <p className='desc'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon <br/>him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <img className='client-logo' src={Logos}/>
            <img className='client-decor' src={RightMidDecor}/>
        </div>
    )
}
