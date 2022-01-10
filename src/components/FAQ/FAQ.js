import React from 'react'
import { ColorLeftDecor, FaqImg, Vector334 } from '../import'
import './FAQ.css'

export const FAQ = () => {
    return (
        <div className='faqs-container'>
            <p className='faqs-header'>FAQ's</p>
            <img className='faq-img' src={FaqImg}/>
            <img className='faq-decor' src={ColorLeftDecor}/>
            <img className='faq-vector334' src={Vector334}/>
        </div>
    )
}