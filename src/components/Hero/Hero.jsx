import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/image.png'
import hero_image_back from '../../assets/dame.png'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}

    return (

        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Learn </span>
                    <span>
                    From
                    </span>
                    <div>
                    <span>
                    The Pros.
                    </span>
                    </div>
                </div>
                
            <div><span>
                Our program will give you the skills and confidence to dominate on the court.
                </span>
            </div>
            
            </div>
            <div className="hero-buttons">
                <div className="btn">Get Started</div>
                <div className="btn">Learn More</div>
            </div>
           </div>
           
            <div className="right-h">
                
                
                <img src={hero_image} alt="" className="hero-image" /> 
                

            </div>
        </div>
    )
}

export default Hero