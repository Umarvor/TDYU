import React, { useState } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const MaSofaaviyTalim = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
         <br  />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
                <NavLink to='/General-Pages/Elektron_kutubxona'><h3 className='H3'>Elektron kutubxona</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Masofaviy_talimm'><h3 className='H3'>Masoofaviy talim</h3></NavLink>
                <NavLink to='/General-Pages/Mashgulotlar_jadvali'><h3 className='H3'>Mashg'ulotlar jadvali</h3></NavLink>

                <NavLink to='/General-Pages/Xoriji_talabalarga'><h3 className='H3'>Xoriji talabalarga</h3></NavLink>
                <NavLink to='/General-Pages/Stipendiyalar_va_garntlar'><h3 className='H3'>Stipendiya va grantlar</h3></NavLink>
                <NavLink to='/General-Pages/Talabalarga_xizmat_korsatish'><h3 className='H3'>Talabalarga xizmat ko'rsatish markazi</h3></NavLink>
                <NavLink to='/General-Pages/Yuridik_klinika'><h3 className='H3'>Yuridik klinika</h3></NavLink>
                
                <NavLink to='/General-Pages/Akademik_mobilik'><h3 className='H3'>Akademig mobillik</h3></NavLink>
                <NavLink to='/General-Pages/Xorijiy_profetsorlar'><h3 className='H3'>Xorijiy profetsorlar</h3></NavLink>
                <NavLink to='/General-Pages/Treninglar'><h3 className='H3'>Treninglar va mayner kurslar</h3></NavLink>
                <NavLink to='/General-Pages/Klub'><h3 className='H3'>Klub va to'garaklar,mahorat darslari va festivallar</h3></NavLink>

                <NavLink to='/General-Pages/Korupsiyaga_qarshikurash_usullari'><h3 className='H3'>Korupsiyaga qarshikurash usullari</h3></NavLink>




                <br />

            </article>
            <div  className="masofaviy-talim">
                <h1 className="title">Masofaviy Ta'lim</h1>

                <h2 className="section-title">Masofaviy Ta'limning Ahamiyati va Afzalliklari</h2>
                <p className="paragraph">
                    Masofaviy ta'lim – bu zamonaviy texnologiyalar yordamida ta'lim olish usuli bo'lib, talabalar va o'qituvchilar geografik joylashuvdan qat'i nazar, o'zaro aloqada bo'lishlari mumkin. Bu ta'lim shakli quyidagi afzalliklarni taqdim etadi:
                </p>
                <ul className="list">
                    <li className="list-item">
                        <strong>Erkinlik va Moslashuvchanlik:</strong> Talabalar o'zlariga qulay vaqtda va joyda ta'lim olishlari mumkin. Bu ayniqsa, ishchi yoki boshqa mas'uliyatlari bo'lgan odamlar uchun juda qulay.
                    </li>
                    <li className="list-item">
                        <strong>Resurslarga Keng Kirish Imkoniyati:</strong> Masofaviy ta'lim talabalariga turli xil raqamli resurslar va materiallarga kirish imkoniyatini beradi. Bu esa ta'lim jarayonini yanada boyitadi va kengaytiradi.
                    </li>
                    <li className="list-item">
                        <strong>Xarajatlarni Tejash:</strong> Masofaviy ta'lim an'anaviy ta'limga nisbatan arzonroq bo'lishi mumkin, chunki u transport, turar joy va boshqa xarajatlarni kamaytiradi.
                    </li>
                    <li className="list-item">
                        <strong>Texnologik Ko'nikmalarni Rivojlantirish:</strong> Masofaviy ta'lim jarayonida talabalar zamonaviy texnologiyalar bilan ishlashni o'rganadilar, bu esa ularning kelajakdagi karyeralari uchun muhim ko'nikmalarni shakllantiradi.
                    </li>
                </ul>

                <h2 className="section-title">Masofaviy Ta'lim Platformalari</h2>
                <p className="paragraph">
                    Bizning universitetimiz turli xil masofaviy ta'lim platformalaridan foydalanadi, jumladan:
                </p>
                <ul className="list">
                    <li className="list-item">
                        <strong>LMS (Learning Management System):</strong> Bu tizim orqali talabalar o'quv materiallariga kirish, topshiriqlarni topshirish va baholarni kuzatish imkoniyatiga ega bo'ladilar.
                    </li>
                    <li className="list-item">
                        <strong>Videokonferensiya Dasturlari:</strong> Zoom, Microsoft Teams va boshqa dasturlar orqali talabalar va o'qituvchilar real vaqtda darslar o'tkazishlari va muhokamalar olib borishlari mumkin.
                    </li>
                    <li className="list-item">
                        <strong>Onlayn Kutubxonalar:</strong> Elektron kitoblar, maqolalar va boshqa ta'lim resurslari talabalar ixtiyorida bo'ladi.
                    </li>
                </ul>

                <h2 className="section-title">Masofaviy Ta'limning Muammolari va Ularni Hal qilish Yo'llari</h2>
                <p className="paragraph">
                    Masofaviy ta'limning ba'zi qiyinchiliklari mavjud bo'lishi mumkin, masalan:
                </p>
                <ul className="list">
                    <li className="list-item">
                        <strong>O'z-o'zini boshqarish:</strong> Talabalar o'z vaqtlarini samarali boshqarishlari va o'z-o'zini motivatsiya qilishlari kerak bo'ladi.
                    </li>
                    <li className="list-item">
                        <strong>Texnik Muammolar:</strong> Internet ulanishi yoki texnologik nosozliklar bo'lishi mumkin, bu esa ta'lim jarayoniga xalaqit berishi mumkin.
                    </li>
                </ul>
                <p className="paragraph">
                    Bu muammolarni hal qilish uchun universitetimiz quyidagi chora-tadbirlarni ko'rmoqda:
                </p>
                <ul className="list">
                    <li className="list-item">
                        <strong>Qo'llab-quvvatlash Xizmati:</strong> Talabalarimizga texnik muammolar yuzasidan yordam beradigan maxsus xizmatlarimiz mavjud.
                    </li>
                    <li className="list-item">
                        <strong>Masofaviy Ta'lim Ko'nikmalarini O'rgatish:</strong> Talabalarga masofaviy ta'lim uchun zarur bo'lgan ko'nikmalarni o'rgatish bo'yicha maxsus kurslar tashkil qilinadi.
                    </li>
                </ul>
                <p className="paragraph">
                    Masofaviy ta'lim bugungi kunda tobora ommalashib borayotgan ta'lim shakllaridan biridir. Universitetimiz bu yo'nalishda barcha zamonaviy texnologiyalar va metodikalarni qo'llagan holda, sifatli va samarali ta'lim berishga intilmoqda.
                </p>
            </div>
        </>
    );
};

export default MaSofaaviyTalim;
