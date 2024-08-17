import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const RemoteLearning = () => {
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
            <div className="container">
                <h1 className="heading">Masofaviy Ta'lim</h1>
                <p className="welcomeMessage">Xush kelibsiz!</p>
                <p id='h3' className="text">
                    Bizning masofaviy ta'lim platformamiz sizga istalgan joydan va istalgan vaqtda sifatli ta'lim olish imkoniyatini taqdim etadi. Bu bo'limda siz quyidagi imkoniyatlardan foydalanishingiz mumkin:
                </p>
                <ul className="list">
                    <li>Turli kurslar: Turli fanlar va yo'nalishlar bo'yicha onlayn kurslar. Har bir kurs malakali o'qituvchilar tomonidan tuzilgan va tasdiqlangan.</li>
                    <li>Interaktiv darslar: Video darslar, interaktiv materiallar va vazifalar orqali samarali o'qish tajribasi.</li>
                    <li>Sinovlar va baholash: O'qishni sinovlar va testlar orqali baholash imkoniyati.</li>
                    <li>O'qituvchilar bilan aloqa: Savollar va maslahatlar uchun o'qituvchilar bilan bevosita muloqot qilish imkoniyati.</li>
                    <li>Resurslar va qo'llanmalar: O'qish jarayonida kerak bo'ladigan qo'shimcha resurslar va o'quv qo'llanmalari.</li>
                </ul>
                <h2 id='h3' className="subHeading">Ro'yxatdan o'ting</h2>
                <p id='h33' className="text">
                    Masofaviy ta'lim imkoniyatlaridan foydalanish uchun ro'yxatdan o'ting va ta'lim sayohatingizni boshlang. Ro'yxatdan o'tish jarayoni oddiy va tez. Shuningdek, kurslar haqida batafsil ma'lumot olish va tanlash imkoniyati mavjud.
                </p>
                <h2 id='h3' className="subHeading">Qo'shimcha Ma'lumot</h2>
                <p id='h33' className="text">
                    Agar sizda savollar bo'lsa yoki qo'shimcha ma'lumotga ehtiyoj sezsangiz, biz bilan bog'lanishingiz mumkin. Bizning qo'llab-quvvatlash guruhi sizga yordam berishga tayyor.
                </p>
                <p  id='h33' className="text">
                    Bizning masofaviy ta'lim platformamiz sizni o'qish jarayonida qo'llab-quvvatlash uchun mavjud. Bugundan o'rganishni boshlang va o'z kelajagingizni qurishga birinchi qadam qo'ying!
                </p>
            </div>
        </>
    );
};

export default RemoteLearning;
