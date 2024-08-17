import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbarroter30() {
    return (
        <>
            <br />
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <br />
                <a className='H3' href="/">Bosh sahifaga qaytish</a>

                <NavLink to='/General-Pages/Qabul'><h3 className='H3'>Qabul</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Ilm_fond'><h3 className='H3'>Ilm fond</h3></NavLink>

                <NavLink to='/General-Pages/Ilmiy_nashrlar'><h3 className='H3'>Ilmiy nashrlar</h3></NavLink>
                <NavLink to='/General-Pages/Ilmiy_kengashlar'><h3 className='H3'>Ilmiy kengashlar</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>




                <br />

            </article>
            <div className="Navbarroter30">
                <header>
                    <h1 id='h3' className="main-heading">Toshkent davlat yuridik universiteti (TDYU)</h1>
                </header>
                <section>
                    <p className="intro">
                        TDYU – bu O‘zbekistondagi “yurisprudensiya” mutaxassisligi bo‘yicha yuridik kadrlarni tayyorlash bo‘yicha yagona bazaviy oliy ta’lim muassasasidir. Bu sud, prokuratura, advokatura, biznes, yuridik xizmat va xalqaro darajadagi yuristlarni tayyorlaydigan universitetdir.
                    </p>
                    <p className="intro">
                        TDYU 30 yillik tarixga ega bo‘lib, uning bitiruvchilari O‘zbekiston va xorijning nufuzli tashkilotlarida muvaffaqiyatli faoliyat ko‘rsatmoqda.
                    </p>
                </section>

                <section>
                    <h2 id='h3' className="sub-heading">TDYU tomonidan taklif etiladigan yo‘nalishlar</h2>
                    <h3 id='h3' className="section-heading">Xorijlik talabalar uchun yo‘nalishlar:</h3>
                    <ul>
                        <li>Yurisprudensiya: davlat-huquqiy faoliyat</li>
                        <li>Yurisprudensiya: jinoyat-huquqiy faoliyat</li>
                        <li>Yurisprudensiya: biznes huquqi</li>
                        <li>Yurisprudensiya: xalqaro huquq va qiyosiy huqushunoslik</li>
                        <li>Davlat boshqaruvi</li>
                    </ul>

                    <h3 id='h3' className="section-heading">Ta'lim shakllari:</h3>
                    <ul>
                        <li>Bakalavriat bo‘yicha:</li>
                        <ul>
                            <li>Kunduzgi – 4 yillik o‘qish</li>
                            <li>Sirtqi – 5 yillik o‘qish</li>
                        </ul>
                        <li>Magistratura bo‘yicha:</li>
                        <ul>
                            <li>Kunduzgi – 1 yillik o‘qish</li>
                        </ul>
                    </ul>
                </section>

                <section>
                    <h2 id='h3' className="sub-heading">TDYU o‘qituvchilari va professorlari</h2>
                    <p className="info">
                        TDYU universitetida talabalarga nufuzli o‘qituvchilar jamoasi ta`lim beradi. Umumiy o‘qituvchilar tarkibining 30 foizi QS va THE xalqaro reyting tashkilotlarida nufuzli xalqaro universitetlarida ta`lim olgan. Universitet professorlarining 40 foizi ilmiy darajaga ega.
                    </p>
                </section>

                <section>
                    <h2 id='h3' className="sub-heading">Hamkorlik va xalqaro standartlar</h2>
                    <p className="info">
                        TDYU TOP-1000 ga kiradigan universitetlar bilan hamkorlik qiladi. Ta’lim standartlari xalqaro sifat mezonlariga muvofiq keladi va bitiruvchilarga nafaqat O‘zbekistonda, balki chet elda ham o‘z faoliyatini boshlashga imkon beradi.
                    </p>
                </section>

                <section>
                    <h2 id='h3' className="sub-heading">To'lov-kontrakt shartlari</h2>
                    <p className="info">
                        Universitet to‘lov-kontrakt miqdorini bo‘lib-bo‘lib to‘lashning qulay shartlarini taklif etadi. Shartnoma yilda 2 marta to‘lanadi.
                    </p>
                </section>

                <section>
                    <h2 id='h3' className="sub-heading">Amaliyot va qo‘shimcha imkoniyatlar</h2>
                    <p className="info">
                        Mamlakatning davlat va nodavlat tashkilotlarida, eng yaxshi yuridik va biznes kompaniyalarida amaliyot o'tash imkoni mavjud.
                    </p>
                    <h3 id='h3' className="section-heading">Qo'shimcha imkoniyatlar:</h3>
                    <ul>
                        <li>Axborot-resurs markazida 300 mingdan ortiq kitoblar va ularning elektron resursi</li>
                        <li>Ko‘zi ojiz talabalarga sharoit yaratish maqsadida NVDA dasturi</li>
                        <li>Westlaw, LexisNexis, Lexis®Library, Springer. Web of Science, Scopus, Polpred.com, EBSCO ma`lumotlar bazasidan foydalanish</li>
                        <li>Sport musobaqalari</li>
                        <li>Teatr, kino, madaniy hordiq</li>
                    </ul>
                </section>
            </div>

        </>
    )
}

export default Navbarroter30