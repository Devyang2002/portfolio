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

export default function Testimonials({id}) {
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
        <SwiperSlide> 
            <div className="test_basics">
                <img src={Img2} alt="" />
                <h5>Samantha Wu</h5>
                <div className='position'>Software Engineer</div>
                <p>I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results. His ability to understand complex requirements and implement efficient solutions was truly impressive. I would highly recommend him to any organization looking for a talented developer.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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