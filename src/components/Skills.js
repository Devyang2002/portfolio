import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../styles/Skills.css'
import Cpp from '../assets/democpp.webp'

export default function Skills({id, data}) {
      const swiper_style={
               width: '100%',
             paddingTop: '50px',
             paddingBottom: '50px',
      }

      const swiperslide_style ={
             backgroundPosition: 'center',
             backgroundSize: 'cover',
            width: '400px',
            height:'200px',
            background: 'rgba( 255, 255, 255, 0.35 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 12.5px )',
            WebkitBackdropFilter: 'blur( 12.5px )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            borderRadius: '10px',
      }

  return (
    <>
    <div id={id}>
        <div className="skills_head">
          <h1>My Skills</h1>
            </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={swiper_style}
      >
        {
            data.map((item)=>{
                return <SwiperSlide style={swiperslide_style}>
                <div className="skills_main">
              <div className="skills_basics">
                  <img src={item.image.url} alt="" />
                  <div className="skillbasic">
                  <h1>{item.name}
                  </h1>
                  <p>
                      (with {item.percentage}%  proficiency)
                  </p>
                  </div>
              </div>
              <div className="skills_percentages">
              <hr style={{ 
                  width: '350px', 
                  height: '10px', 
                  background: `linear-gradient(to right, purple ${item.percentage}%, white 0%)`,
                  border: '1px solid black'
                  }} />
              </div>    
              </div>   
              </SwiperSlide>
            })
        }
       </Swiper>
       </div> 
    </>
  )
}


// .swiper {
//   width: 100%;
//   padding-top: 50px;
//   padding-bottom: 50px;
// }

// .swiper-slide {
//   background-position: center;
//   background-size: cover;
//   width: 300px;
//   height: 300px;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
// }