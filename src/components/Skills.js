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

export default function Skills({id}) {
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

      
        <SwiperSlide style={swiperslide_style}>
          <div className="skills_main">
        <div className="skills_basics">
            <img src={Cpp} alt="" />
            <div className="skillbasic">
            <h1>C++ 
            </h1>
            <p>
                (with 10%  proficiency)
            </p>
            </div>
        </div>
        <div className="skills_percentages">
        <hr style={{ 
            width: '350px', 
            height: '10px', 
            background: `linear-gradient(to right, purple 10%, white 0%)`,
            border: '1px solid black'
            }} />
        </div>    
        </div>   
        </SwiperSlide>
        <SwiperSlide style={swiperslide_style}>
        <div className="skills_main">
        <div className="skills_basics">
        <img src={Cpp} alt="" />
        <div className="skillbasic">
            <h1>mongo db 
            </h1>
            <p>
                (with 40%  proficiency)
            </p>
            </div>
        </div>
        <div className="skills_percentages">
        <hr style={{ 
            width: '350px', 
            height: '10px', 
            background: `linear-gradient(to right, purple 40%, white 0%)` }} />
        </div>    
        </div>  
        </SwiperSlide>
        <SwiperSlide style={swiperslide_style}>
        <div className="skills_main">
        <div className="skills_basics">
            <img src={Cpp} alt="" />
            <div className="skillbasic">
            <h1>Javascript 
            </h1>
            <p>
                (with 80%  proficiency)
            </p>
            </div>
        </div>
        <div className="skills_percentages">
        <hr style={{ 
            width: '350px', 
            height: '10px', 
            background: `linear-gradient(to right, purple 80%, white 0%)` }} />
        </div>    
        </div>  
        </SwiperSlide>
        <SwiperSlide style={swiperslide_style}>
        <div className="skills_main">
        <div className="skills_basics">
            <img src={Cpp} alt="" />
            <div className="skillbasic">
            <h1>React Js
            </h1>
            <p>
                (with 60%  proficiency)
            </p>
            </div>
        </div>
        <div className="skills_percentages">
        <hr style={{ 
            width: '350px', 
            height: '10px', 
            background: `linear-gradient(to right, purple 60%, white 0%)`
            
            }} />
        </div>    
        </div>  
        </SwiperSlide>
        <SwiperSlide style={swiperslide_style}>
        <div className="skills_main">
        <div className="skills_basics">
            <img src={Cpp} alt="" />
            <div className="skillbasic">
            <h1>Html
            </h1>
            <p>
                (with 90%  proficiency)
            </p>
            </div>
        </div>
        <div className="skills_percentages">
        <hr style={{ 
            width: '350px', 
            height: '10px', 
            background: `linear-gradient(to right, purple 90%, white 0%)` ,
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            }} />
        </div>    
        </div>  
        </SwiperSlide>
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
