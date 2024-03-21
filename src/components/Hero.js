import React from 'react'
import Image from '../assets/hero.jpg.JPG';
import '../styles/Hero.css'
export default function Hero({id}) {
  return (
    <div className="hero_main" id={id}>
    <div className='hero_section'>
      <div className="hero_p">
        <div className="hero_heading">
            <span>Hello I'm</span>
        <h1 data-aos="fade-right">Full Stack Developer</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero velit adipisci sed, delectus similique nihil voluptatem. At, cupiditate quaerat.</p>
      </div>
      <div className="hero_img">
        <img src={Image} alt="" data-aos="zoom-in"/>
      </div>
    </div>
    </div>
  )
}


