import React, { useEffect, useState } from 'react'
import Image from '../assets/hero.jpg.JPG';
import '../styles/Hero.css'
export default function Hero({id, data}) {
  
  return (
    <div className="hero_main" id={id}>
    <div className='hero_section'>
      <div className="hero_p">
        <div className="hero_heading">
            <span>Hello I'm {data.name}</span>
        <h1 data-aos="fade-right">{data.title}</h1>
        </div>
        <p>{data.description}</p>
      </div>
      <div className="hero_img">
        <img src={data.avatar.url} alt="" data-aos="zoom-in"/>
      </div>
    </div>
    </div>
  )
}


