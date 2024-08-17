import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbarroter33() {
    return (
        <>
            <br />
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />




                <NavLink to='/General-Pages/Qabul'><h3 className='H3'>Qabul</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Ilm_fond'><h3 className='H3'>Ilm fond</h3></NavLink>

                <NavLink to='/General-Pages/Ilmiy_nashrlar'><h3 className='H3'>Ilmiy nashrlar</h3></NavLink>
                <NavLink to='/General-Pages/Ilmiy_kengashlar'><h3 className='H3'>Ilmiy kengashlar</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>


                <br />

            </article>
            <article className='Navbarroter33'>
                <h2 className='Project'>“TSUL Legal Report” xalqaro elektron ilmiy jurnal
                </h2>
                <h3 id='mi'>
                    Jurnal 2020-yil mart oyida ta’sis etilgan va ingliz tilida nashr etiladi.

                    <br /><br />Bugungi kunda barcha ijtimoiy tarmoqlarda jurnalning rasmiy sahifasi ochilgan bo‘lib, keng ommaga targ‘ib qilinmoqda hamda ushbu jurnalning ilk soni 2020-yil oktabr oyida e’lon qilindi.

                    O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan ommaviy axborot vositasi davlat ro‘yxatidan o‘tkazilgani to‘g‘risida № 1342 guvohnoma berilgan.

                    <br /><br />Jurnalga mualliflar tomonidan ingliz tilida tayyorlangan maqolalar qabul qilinadi.

                    <br /><br />Jurnal davriyligi – 3 oyda bir marta, yiliga 4 ta son.

                    Jurnalning asosiy vazifasi – O‘zbekiston Respublikasida amalga oshirilayotgan huquqiy islohotlarning mazmun-mohiyatini ingliz tilida yoritib borish va qabul qilinayotgan normativ-huquqiy hujjatlarga turkum sharhlar e’lon qilish.</h3>
            </article>
            <br />
        </>
    )
}

export default Navbarroter33