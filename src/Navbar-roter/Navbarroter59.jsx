import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';

const EducationalInfo = () => {
    const handleDownload = () => {
        // PDF fayl URL manzilini kiriting
        const pdfUrl = '../img/IELTS 8.5 Routine.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <> <br />
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

            <div className="educational-info">
                <section className="year-section">
                    <h2 className='xxx' >2023/2024</h2>
                    <ul>
                        <li onClick={handleDownload} >2023/2024 o'quv yilida xorijiy va nodavlat oliy ta'lim muassasalaridan respublika davlat oliy ta'lim muassasalariga talabalar o'qishini ko'chirish uchun o'tkaziladigan maxsus sinovlar bo'yicha o'tish ballari</li>
                        <NavLink to='/General/Pages/Uqishini_kuchirish'><li>Talabalar o'qishini ko'chirish</li></NavLink>
                    </ul>
                </section>
                <section className="year-section">
                    <h2 className='xxx'>2022/2023</h2>
                    <ul>
                        <li onClick={handleDownload} >2022/2023 o'quv yilida xorijiy va nodavlat oliy ta'lim muassasalaridan respublika davlat oliy ta'lim muassasalariga talabalar o'qishini ko'chirish uchun o'tkaziladigan maxsus sinovlar bo'yicha o'tish ballari</li>
                        <NavLink to='/General/Pages/Uqishini_kuchirish'><li>Talabalar o'qishini ko'chirish</li></NavLink>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default EducationalInfo;
