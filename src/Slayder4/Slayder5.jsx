import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Slayder51 from '../img/uzz.png';
import Slayder52 from '../img/datagovuz.png';
import Slayder53 from '../img/minjust.png';
import Slayder54 from '../img/regulation.gov.uz.png';
import Slayder55 from '../img/question-mark.png';
import Slayder56 from '../img/president.uz.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Slayder5.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function Slayder4() {
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    { id: 1, link: "//uzedu.uz/", img: Slayder51, alt: "uzedu.uz", title: "uzedu.uz" },
    { id: 2, link: "https://data.gov.uz/", img: Slayder52, alt: "data.gov.uz", title: "data.gov.uz" },
    { id: 3, link: "https://minjust.uz/", img: Slayder53, alt: "minjust.uz", title: "minjust.uz" },
    { id: 4, link: "https://www.gov.uz/", img: Slayder54, alt: "gov.uz", title: "gov.uz" },
    { id: 5, link: "https://president.uz/", img: Slayder56, alt: "president.uz", title: "president.uz" },
    { id: 6, link: "https://pm.gov.uz/", img: Slayder56, alt: "pm.gov.uz", title: "pm.gov.uz" },
    { id: 7, link: "https://regulation.gov.uz/", img: Slayder56, alt: "regulation.gov.uz", title: "regulation.gov.uz" },
    { id: 8, link: "https://my.gov.uz/ru", img: Slayder51, alt: "my.gov.uz", title: "my.gov.uz" }
  ];

  return (
    <div className='Swiperr'>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={70}
        loop={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className='wee'>
            <article className='Slayder5-article'>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img className='Slayder5-img' src={slide.img} alt={slide.alt} />
              </a>
              <h1 className='Slayder5-h1'>{slide.title}</h1>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
