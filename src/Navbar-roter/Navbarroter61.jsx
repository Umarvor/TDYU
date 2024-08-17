import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar-roter1.css'
function EducationalInfo() {
    return (
        <>
            <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />



                <NavLink to='/General-Pages/Qabul_jarayoniga_oid_elonlar'><h2 className='H3'>Qabul jarayoniga oid elonlar</h2></NavLink>
                <NavLink to='/General-Pages/Talabalarni_uqishini_kuchirish'><h2 className='H3'>Talabalarni o'qishini ko'chirish</h2></NavLink>
                <NavLink to='/General-Pages/Qushmaa_talim_dasturlari'><h2 className='H3'>Qo'shma talim dasturlari asosida o'qishga qabul qilish</h2></NavLink>

                <br />

            </article>

            <div className="container">
                <section>
                    <div>
                        <h2 className='xxx' >2023/2024</h2>
                        <NavLink to='/General/Pages/2022/2023-o‘quv-yili-uchun qo‘shma-ta’lim-dasturlariga-o‘qishga-qabul-qilish-bo‘yicha-MA’LUMOT'><p>
                            2023/2024-o‘quv yili uchun qo‘shma ta’lim dasturlariga o‘qishga qabul qilish bo‘yicha -MA’LUMOT
                        </p></NavLink>
                    </div>
                    <div>
                        <h2 className='xxx' >2022/2023</h2>

                        <NavLink to='/General/Pages/2022/2023-o‘quv-yili-uchun qo‘shma-ta’lim-dasturlariga-o‘qishga-qabul-qilish-bo‘yicha-MA’LUMOT'><p> 2022/2023-o‘quv yili uchun qo‘shma ta’lim dasturlariga o‘qishga qabul qilish bo‘yicha - MA’LUMOT</p></NavLink>

                    </div>
                </section>
            </div>
        </>
    );
}

export default EducationalInfo;
