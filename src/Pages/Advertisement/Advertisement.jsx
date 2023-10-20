import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import slider1 from '../../assets/slider4.jpg'
import slider2 from '../../assets/slider1.jpg'
import slider3 from '../../assets/slider3.jpg'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const Advertisement = () => {
    return (
        <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
  
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(${slider1})`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title text-white" data-swiper-parallax="-300">
  Buy any product with 20% discount. 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  
  </div>
  <div className="text text-white" data-swiper-parallax="-100">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(${slider2})`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300">
  Buy any product with 20% discount. 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
   
  </div>
  <div className="text" data-swiper-parallax="-100">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
  
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(${slider3})`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300">
  Buy any product with 20% discount. 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  
  </div>
  <div className="text" data-swiper-parallax="-100">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>

        </Swiper>
      </>
    );
};

export default Advertisement;