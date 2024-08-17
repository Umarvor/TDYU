import React from 'react'
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
import Ilmiy_faolyat from '../img/ilmiy faolyat.jpg'
function Navbarroter46() {
    return (
        <>
            <br />
            <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />


                <NavLink to='/General-Pages/Ilmiy_faolyat'><h2 className='H3'>Ilmiy faolyat</h2></NavLink>
                <NavLink to='/General-Pages/Ilmiy_nashrlarr'><h2 className='H3'>Ilmiy nashrlar</h2></NavLink>
                <NavLink to='/General-Pages/Yosh_olimlar_kengashi'> <h2 className='H3'>Yosh olimlar kengashi</h2></NavLink>
                <NavLink to='/General-Pages/Davlat_grantlar'><h2 className='H3'>Davlat ilmiy texnik dasturlari doirasidagi grantlar</h2></NavLink>
                <br />

            </article>

            <div className='document-list'>


                <h1 className='Project'>Ilmiy faoliyat</h1>
                <p>
                    Toshkent davlat yuridik universiteti “TSUL” ning ilmiy faoliyati O‘zbekistonda, balki Markaziy Osiyoda “yurisprudensiya” mutaxassisligi bo‘yicha ilmiy salohiyatni kuchaytirish, oliy ta’limdan keyingi ta’lim institutlarida yuqori malakali ilmiy va ilmiy-pedagogik kadrlar - falsafa doktorlari (PhD) va fan doktorlari (DSc) tayyorlash, ilmiy tadqiqotlarni olib borish va uning natijalarini huquqshunoslik barcha sohalariga tadbiq etish, oliy ta’lim va ilmiy-tadqiqot muassasalari, davlat va xo‘jalik boshqaruv organlari hamda boshqa tashkilotlar, shuningdek, xorijiy yetakchi oliy ta’lim va ilmiy-tadqiqot muassasalari bilan o‘zaro hamkorlikni yo‘lga qo‘yishga yo‘naltirilgan.

                    Ilmiy faoliyat va ilmiy tadqiqot olib borish universitetning professor-o‘qituvchilar, mustaqil izlanuvchilar, doktorantlar, magistrlar va talabalarning eng muhim faoliyatlaridan biridir.
                </p>
                <img className='document-list' src={Ilmiy_faolyat} alt="" />
                <br />
                <p> Universitetning ilmiy faoliyat va ilmiy tadqiqoti O‘zbekiston Respublikasining “Ta’lim to‘g‘risida”gi qonun, 2017-yil 16-fevraldagi O‘zbekiston Respublikasi Prezidentining “Oliy o‘quv yurtidan keyingi ta’lim tizimini yanada takomillashtirish to‘g‘risida”gi farmoni, 2017-yil 22-maydagi O‘zbekiston Respublikasi Vazirlar Mahkamasining “Oliy ta’limdan keyingi ta’lim tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi 304-son qarori, O‘zbekiston Respublikasi Prezidentining “O‘zbekiston Respublikasida yuridik ta’lim va fanni tubdan takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida”gi, O‘zbekiston Respublikasi Oliy ta’lim tizimini 2030-yilgacha rivojlantirish kontseptsiyasini tasdiqlash to‘g‘risidagi, Ilm-fanni 2030-yilgacha rivojlantirish kontseptsiyasini tasdiqlash to‘g‘risidagi farmonlari va “Ilmiy boshqarma to‘g‘risida”gi nizom hamda boshqa qonun va qonunosti hujjatlariga asosan amalga oshirilmoqda.</p>

                <p> Universitetda ilmiy-tadqiqotning asosiy yo‘nalishlari quyidagilardan iborat:</p>
                <br />

                <p>12.00.00 - YURIDIK FANLAR</p>

                <p> 12.00.01 - Davlat va huquq nazariyasi va tarixi. Huquqiy ta’limotlar tarixi.</p>

                <p>  12.00.02 - Konstitutsiyaviy huquq. Ma’muriy huquq. Moliya va bojxona huquqi.
                </p>
                <p>12.00.03 - Fuqarolik huquqi. Tadbirkorlik huquqi. Oila huquqi. Xalqaro xususiy huquq.</p>

                <p> 12.00.04 - Fuqarolik protsessual xuquqi. Xo‘jalik protsessual xuquqi. Hakamlik jarayoni va mediatsiya.
                </p>

                <p>
                    12.00.05 - Mehnat huquqi. Ijtimoiy ta’minot huquqi.
                </p>
                <p> 12.00.06 - Tabiiy resurslar huquqi. Agrar huquq. Ekologik huquq.</p>

                <p> 12.00.07 - Sud hokimiyati. Prokuror nazorati. Huquqni muhofaza qilish faoliyatini tashkil etish. Advokatura.</p>

            </div>
        </>
    )
}

export default Navbarroter46