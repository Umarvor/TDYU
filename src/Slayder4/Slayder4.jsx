import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Slayder4.css';

import { Navigation, Autoplay } from 'swiper/modules';

export default function Slayder4() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [users, setUsers] = useState([]);
  const [link, setLink] = useState('http://localhost:3000/Slayder3');

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch(link);
        const data = await req.json();
        setUsers(data);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    };
    dataFetch();
  }, [link]);

  return (
    <NavLink to='Uqituvchi'>
      <div className='Swiperr'>
        <h3 id='h3' className='Slayder4-h1-child'>Bizning o'qituvchilar</h3>
        <NavLink to='/uquvchilar_ruyxati'>
          <h3 id='h3' className='Slayder4-h1-chil'>O'qituvchilar ro'yxati</h3>
        </NavLink>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1000, // 1 second
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          modules={[Navigation, Autoplay]}
        >
          {users.map((user) => (
            <SwiperSlide className='we' key={user.id}>
              <article className='Slayder4-article'>
                <img className='SwiperSlide1' src={user.img} alt={user.ism} />
                <h1 className='Slayder4-article-h1'>{user.ism}</h1>
                <h1 className='Slayder4-article-h1-1'>{user.daraja}</h1>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NavLink>
  );
}
