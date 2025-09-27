import React from 'react'
import './Hero.css'
import Profile_img  from '../../assets/profile_img.svg'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={Profile_img} alt="" />
        <h1> <span>Im Alex Bannent,</span>frontend developer <br />based in Iran</h1>
        <p>I am a frontend developer from Iran with 10 years of experience in multiple companies like Microsoft and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Connent with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero