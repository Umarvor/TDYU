import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slid.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slayder4() {
    const [users, setUsers] = useState([]);
    const [link, setLink] = useState('http://localhost:3000/slider');

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
        <NavLink to='/Yangiliklar'>
            <div className='Swiperr'>
                <h1 className='wee'>Yangiliklar</h1>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 1600,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {users.map((user) => (
                        <SwiperSlide className='we' key={user.id}>
                            <article className='box44'>
                                <img className='box43' src={user.img} alt="" />
                                <h5 className='date'>{user.kun}</h5>
                                <h1 className='swiper-slide'>{user.chiziq}</h1>
                                <h4 className='text'>{user.yozuv}</h4>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </NavLink>
    );
}
