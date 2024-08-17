
import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const UniversityActivities = () => {
    return (
        <>

            <br />
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
            <div id='anti-corruption-container' className="activities-container">
                <h1 id='h33'>Toshkent davlat yuridik universiteti Klub va To‘garaklari</h1>
                <p>
                    Toshkent davlat yuridik universiteti aholi, ayniqsa, yoshlarni universitetda tashkil etilgan klub va to‘garaklarga a’zo bo‘lishga, mahorat darslari va festivallarda ishtirok etishga chorlaydi.
                </p>
                <p>
                    Toshkent davlat yuridik universiteti tomonidan aholi, ayniqsa, yoshlarning bo‘sh vaqtini mazmunli tashkil etish, ularning iqtidorini namoyish etishi uchun imkon yaratish, yigit-qizlarning intellektual salohiyatini oshirish maqsadida 50 dan ortiq klub va to‘garaklar tashkil etilgan.
                </p>
                <p>
                    Ushbu klub va to‘garaklar faoliyati bilan quyidagi linklar orqali tanishishingiz mumkin…
                </p>
                <p>
                    Talabalar ushbu klub va to‘garaklarga onlayn va oflayn tarzda a’zo bo‘lishi mumkin.
                </p>

                <h2 id='h33'>Sport to‘garaklari</h2>
                <p>
                    Toshkent davlat yuridik universitetida aholi, ayniqsa, yoshlarning turli sport turlari bilan shug‘ullanishiga imkoniyat va sharoit yaratish maqsadida 10 ga yaqin sport to‘garaklari faoliyat olib bormoqda. Ushbu to‘garaklarga a’zo bo‘lishni istaganlar quyidagi link orqali ularning o‘tkaziladigan kunlari va vaqtlari haqida ma’lumot olishi hamda onlayn tarzda to‘garaklarga a’zo bo‘lishi mumkin:
                </p>
                <p>
                    Sport to‘garaklarining mashg‘ulotlar jadvali bilan tanishish…
                </p>

                <h2 id='h33'>Talabalar teatr studiyasi</h2>
                <p>
                    Toshkent davlat yuridik universitetiga tashrif buyurganlar nafaqat universitetning teatr studiyasi tomonidan sahnalashtirilgan spektakllarni tomosha qilishi, balki ularda o‘zlari ham ishtirok etishi mumkin. Buning uchun TDYU “Talabalar teatr studiyasi”ga a’zo bo‘lish kifoya.
                </p>

                <h2 id='h33'>Talabalar festivallari</h2>
                <p>
                    Toshkent davlat yuridik universitetida bir o‘quv yili davomida kamida ikki marta “Talabalar festivali” o‘tkaziladi. Ushbu festivallarda aholi, ayniqsa, yoshlar turli tanlov, viktorina, sport musobaqalarida ishtirok etishi mumkin. Universitetda o‘tkazilgan “Talabalar festivali” jarayonlari bilan quyidagi link orqali tanishishingiz mumkin:
                </p>
                <p >
                    “Talabalar festivali” jarayonlari bilan tanishish…
                </p>
            </div>
        </>
    );
};

export default UniversityActivities;
