import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slayder.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function Slayder3() {
 
  const [users, setUsers] = useState([]);
  const [link, setLink] = useState('http://localhost:3000/Slayder2');

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch(link);
        const data = await req.json();
        setUsers(data);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    }
    dataFetch();
  }, [link]);

  return (
    <NavLink to='/General-Pages/Yosh_olimlar'>
      <div className='Swiperr'>
        <h1 id='h3' className='Slayder4-h1-child'>Yosh olimlar</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {users.map((user) => (
            <SwiperSlide className='we' key={user.id}>
              <article className='article' key={user.id}>
                <img className='SwiperSlide1' src={user.img} alt="" />
                <h4 className='box50'>{user.kun}</h4>
                <p className='box51'>{user.yozuv}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NavLink>
  );
}
