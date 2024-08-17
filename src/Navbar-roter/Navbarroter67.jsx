import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const AdmissionOffice = () => {
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
            <div>
                <h1 id='h3'>Qabul Komissiyasi</h1>
                <p>Hurmatli abituriyentlar va ota-onalar!</p>
                <p>
                    Bizning universitetimizda qabul jarayonini oson va qulay qilish maqsadida qabul komissiyasi bo'limi faoliyat yuritmoqda. Ushbu bo'limda siz quyidagi xizmatlardan foydalanishingiz mumkin:
                </p>
                <ol>
                    <li>
                        <h2 id='h3'>Onlayn Ariza Topsirish:</h2>
                        <p>Universitetga qabul uchun arizalarni onlayn shaklda topshirishingiz mumkin. Arizangiz ko'rib chiqiladi va sizga javob yuboriladi.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Hujjatlar Ro'yxati:</h2>
                        <p>Qabul jarayonida kerakli bo'lgan barcha hujjatlar ro'yxati bilan tanishishingiz mumkin.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Qabul Shartlari:</h2>
                        <p>Universitetga qabul qilish shartlari va talablar haqida batafsil ma'lumot olishingiz mumkin.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Onlayn Konsultatsiya:</h2>
                        <p>Qabul jarayoni bo'yicha savollaringiz bo'lsa, onlayn konsultatsiya xizmatidan foydalanib, mutaxassislarimizdan maslahat olishingiz mumkin.</p>
                    </li>
                    <li>
                        <h2 id='h3'>Qabul Natijalari:</h2>
                        <p>Qabul natijalari e'lon qilinganda, ularni saytimiz orqali kuzatib borishingiz mumkin.</p>
                    </li>
                </ol>
                <h2 id='h3'>Biz bilan bog'lanish:</h2>
                <ul>
                    <a href="/+998 71 233-42-09" target='_blank'><li>Telefon: +998 71 233-42-09</li></a>
                    <a href="/e-mail:tysul@.uz" target='_blank'><li>Email: e-mail:tysul@.uz</li></a>
                </ul>
                <p>Rahmat! Sizga yordam berishdan mamnunmiz va muvaffaqiyatlar tilaymiz!</p>
            </div>
        </>
    );
};

export default AdmissionOffice;
