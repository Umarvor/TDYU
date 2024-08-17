import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const UniversityInteractiveServices = () => {
    return (
        <>
            <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
                <NavLink to='/General-Pages/Masofaviy_talim'><h3 className='H3'>Masofaviy ta'lim</h3></NavLink>
                <NavLink to='/General-Pages/Kutubxona'> <h3 className='H3'>Kutubxona</h3></NavLink>
                <NavLink to='/General-Pages/Qabul_komissiyasii'><h3 className='H3'>Qabul komissiyasi</h3></NavLink>
                <NavLink to='/General-Pages/Intekrativ_xizmat'><h3 className='H3'>Intekrativ xizmatlar</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'> <h3 className='H3'>Elektron unversitet</h3></NavLink>
                <NavLink to='/General-Pages/Kop_savollar'><h3 className='H3'>Ko'p so'raladigan savollar</h3> </NavLink>
               



                <br />

            </article>
            <div className='container66'>
                <h1 id='h3'>Interaktiv Xizmatlar</h1>
                <p>Hurmatli talabalar va o'qituvchilar!</p>
                <p>
                    Bizning universitet saytimizda siz uchun qulay va zamonaviy interaktiv xizmatlar taqdim etilgan. Ushbu bo'limda siz quyidagi xizmatlardan foydalanishingiz mumkin:
                </p>
                <ol>
                    <li>
                        <h2 id='h3'>Onlayn Murojaatlar:</h2>
                        <p>Universitetimiz ma'muriyatiga o'z savollaringiz va takliflaringizni onlayn shaklda yuborishingiz mumkin. Murojaatingiz qisqa vaqt ichida ko'rib chiqiladi va sizga javob beriladi.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Jonli Chat:</h2>
                        <p>Saytimizning jonli chat xizmati orqali real vaqt rejimida universitet xodimlaridan maslahat olishingiz mumkin. Bu xizmat sizga tez va samarali yordam ko'rsatadi.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Interaktiv Xaritalar:</h2>
                        <p>Universitet kampusi va binolarining interaktiv xaritalari orqali kerakli joylarni topishingiz va ular haqida batafsil ma'lumot olishingiz mumkin.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Onlayn To'lovlar:</h2>
                        <p>O'qish to'lovlari va boshqa xizmatlar uchun onlayn to'lovlarni amalga oshirishingiz mumkin. To'lovlar xavfsiz va qulay usullar bilan amalga oshiriladi.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Ovoz Berish va So'rovnomalar:</h2>
                        <p>Saytimizdagi turli mavzulardagi so'rovnomalarda qatnashib, o'z fikringizni bildiring. Sizning fikringiz universitet rivoji uchun juda muhim.</p>
                    </li>
                </ol>
                <h2 id='h3'>Yordam va Qo'llab-quvvatlash:</h2>
                <p>
                    Agar sizda interaktiv xizmatlarimizdan foydalanishda muammolar yoki savollar yuzaga kelsa, iltimos, yordam va qo'llab-quvvatlash bo'limiga murojaat qiling. Biz sizga yordam berishdan mamnun bo'lamiz.
                </p>
                <h2 id='h3'>Biz bilan bog'lanish:</h2>
                <ul>
                    <a href="Telefon: +998 71 123-45-67"><li>Telefon: +998 71 123-45-67</li></a>
                    <a href="Email: support@universitet.uz"><li>Email: support@universitet.uz</li></a>
                </ul>
                <p>Rahmat! Sizning qulayligingiz uchun doimo xizmatdamiz.</p>
            </div>
        </>
    );
};

export default UniversityInteractiveServices;
