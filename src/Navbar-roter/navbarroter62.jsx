import React from 'react';
import { NavLink } from 'react-router-dom';

const EducationalInfo = () => {
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
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 'bold' }}>2023/2024-oʻquv yili uchun qoʻshma taʼlim dasturlariga oʻqishga qabul qilish boʻyicha</h3>
                    <p>MAʼLUMOT</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Ikki diplomli dastur nima</h3>
                    <p>Qo‘shma ta’lim (ikki diplomli) dasturi — O‘zbekiston Respublikasi va xorijiy hamkor oliy ta’lim muassasalari o‘rtasida imzolangan shartnomaga muvofiq kadrlar tayyorlashni va bitiruvchilariga oliy ma’lumot olganligi to‘g‘risidagi barcha xorijiy hamkor oliy ta’lim muassasalari joylashgan davlatlarda tan olinadigan kvalifikatsiya (diplom) berilishini nazarda tutuvchi ta’lim dasturi.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Qoʻshma ta’lim dasturlari boʻyicha ta’lim olish afzalliklar:</h3>
                    <ul>
                        <li>TDYU va xorijiy hamkor OTMlardan birida bir vaqtning oʻzida ta’lim olish;</li>
                        <li>Oʻzbekiston va chet elda nostrifikatsiyasiz ishlash huquqini beruvchi ikkita diplom;</li>
                        <li>oʻqishga kirish va xalqaro darajada ta’lim olish uchun yana bir imkoniyat.</li>
                    </ul>
                    <p>Bu muhim: TDYUning ikki diplomli dasturlari haqida axborotni tezkor tarzda olish uchun maxsus Telegram kanalimizga obuna bo’ling: <a href="https://t.me/DDprograms">https://t.me/DDprograms</a>.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 'bold' }}>TDYU qaysi xorijiy oliy ta’lim muassasalari bilan ikki diplomli dasturlarni amalga oshirmoqda</h3>
                    <p>Toshkent davlat yuridik universiteti xorijiy OTMlar bilan quyidagi ikki diplomli bakalavriat dasturlariga talabalarni oʻqishga qabul qiladi:</p>
                    <ul>
                        <li>N.Lobachevskiy nomidagi Nijniy Novgorod Milliy tadqiqot davlat universiteti (Rossiya, Nijniy Novgorod sh.) bilan:</li>
                        <ul>
                            <li>3-yillik kunduzgi bakalavriat (faqatgina yuridik texnikum bitiruvchilari uchun) – 60 ta oʻrin;</li>
                        </ul>
                        <li>Y.Kupala nomidagi Grodno davlat universiteti (Belarus, Grodno sh.) bilan:</li>
                        <ul>
                            <li>3-yillik kunduzgi bakalavriat (faqatgina yuridik texnikum bitiruvchilari uchun) – 100 ta oʻrin;</li>
                            <li>5-yillik sirtqi bakalavriat – 25 ta oʻrin;</li>
                        </ul>
                        <li>M.Narikbayev nomidagi KAZGYU universiteti (Qozogʻiston, Nur-Sulton sh.) bilan:</li>
                        <ul>
                            <li>4-yillik kunduzgi bakalavriat – 50 ta oʻrin.</li>
                        </ul>
                    </ul>
                    <p>Barcha ikki diplomli dasturlar boʻyicha taʻlim tili – rus tili.</p>
                    <p>3-yillik bakalavriatga faqat Oʻzbekiston Respublikasi Adliya vazirligi yuridik texnikumlarning 2020/2021 va keyingi oʻquv yillari bitiruvchilari qabul qilinadi.</p>
                </div>
                {/* Matnning qolgan qismini shu usulda davom ettiring */}
            </div>
        </>
    );
};

export default EducationalInfo;
