import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../styles/Testimonials.css';
import Img2 from '../assets/testimonials.png'
import demo3 from '../assets/instademo.webp'
import fb from '../assets/facebookdemo.webp'
import twitter from '../assets/twitterdemo.webp'
import linkedin from '../assets/linkedindemo.webp'

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Testimonials({id, data}) {
  return (
    <>
    <div id={id}>
    <div className='main_heading'>
        <h1>Testimonials</h1>
    </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.map((item)=>{
          return <SwiperSlide> 
            <div className="test_basics">
                <img src={item.image.url} alt="" />
                <h5>{item.name}</h5>
                <div className='position'>{item.position}</div>
                <p>{item.review}</p>
            </div>
            </SwiperSlide>
        })}
      </Swiper>
      <div className='footer'>
        <hr />
        <div className="footer_basics">
          {/* <hr/> */}
          {/* <hr /> */}
          <p>Connect with me</p>
          <div className="footer_img">
            <img src={demo3} alt="" />
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}