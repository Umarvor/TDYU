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
                    <h2 className='xxx'>2023/2024</h2>
                    <ul>
                        <li onClick={handleDownload}>2023/2024 oʻquv yili uchun davlat oliy taʼlim muassasalariga oʻqishga qabul qilishning davlat buyurtmasi parametrlarit toʻgʻrisida</li>
                        <li onClick={handleDownload}>2023/2024 oʻquv yilida xorijiy va nodavlat oliy taʼlim muassasalaridan Respublika davlat oliy taʼlim muassasalaridan respublika davlat oliy taʼlim muassasalariga talabalar oʻqishini koʻchirish uchun oʻtkaziladigan maxsus sinovlar boʻyicha oʻtish ballari</li>
                        <li onClick={handleDownload}>2023/2024 oʻquv yili uchun Toshkent davlat yuridik universiteti bakalavriatining kunduzgi taʼlim shakliga xorijiy fuqarolarni taʼlimning ingliz tiliga qabul kvotalardan tashqari toʻlov-kontrakt asosida oʻqishga qabul qilish boʻyicha joylar sonining taʼlim yoʻnalishlari boʻyicha TAQSIMLANISHI</li>
                    </ul>
                </section>
                <section className="year-section">
                    <h2 className='xxx'>2022/2023</h2>
                    <ul>
                        <a href="https://t.me/TSULadmission" target='_blank'><li >Davlat test markazi tomonidan e'lon qilinadigan materiallar</li></a>
                        <a href="https://t.me/TSULadmission" target='_blank'><li>Oliy va oʻrta maxsus taʼlim vazirligi tomonidan e'lon qilinadigan materiallar</li></a>
                        <a href="https://t.me/TSULadmission" target='_blank'><li>Davlat komissiyasi tomonidan e'lon qilinadigan materiallar</li></a>
                        <a href="https://lex.uz/uz/docs/-6069606?query=2022%2F2023&exact=1#sr-1" target='_blank'><li >2022/2023 O'QUV YILI UCHUN DAVLAT OLIY TA'LIM MUASSASALARIGA O'QISHGA QABUL QILISHNING DAVLAT BUYURTMASI PARAMETRLARI TO'G'RISIDA</li></a>
                        <a href="https://lex.uz/docs/-6070845" target='_blank'><li>DAVLAT OLIY TA'LIM MUASSASALARIGA O'QISHGA QABUL QILISH JARAYONLARINI TASHKIL ETISH TO'G'RISIDA</li></a>
                        <li onClick={handleDownload}>Davlat oliy ta'lim muassasalariga kirish uchun berilgan imtiyozlarning yagona REESTRI</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default EducationalInfo;
