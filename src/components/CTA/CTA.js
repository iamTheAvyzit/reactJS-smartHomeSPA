import React from 'react'
import { Union } from '../import'
import './CTA.css'

export const CTA = () => {
    return (
        <div className='cta-container'>
            <p className='cta-header'>Subscribe to our latest feeds</p>
            <p className='cta-desc'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
            <a href='#'><button className='subscribe'>Subscribe</button></a>
            <img className='union' src={Union}/>
        </div>
    )
}
