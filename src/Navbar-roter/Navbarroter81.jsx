import React from 'react';
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
const StudentExchange = () => {
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
            <div id='anti-corruption-container'>
                <h1>Talabalar almashinuvi</h1>

                <div className="section">
                    <p>
                        2020-yil davomida 3 nafar talaba akademik almashinuv dasturi doirasida hamkor universitetlardan TDYUga o‘qishga kelgan.
                    </p>
                    <p>
                        Bundan tashqari, har yili TDYU talabalarining akademik mobillik dasturlarida faol ishtirok etishi ta’minlanadi. Hozirgi kundagi epidemiologik vaziyatga qaramasdan Nagoya universiteti, MIE universiteti, Mikolas Romeris universiteti, Sharqiy Xitoy siyosiy fanlar va huquq universiteti, Belarus davlat universiteti, Gdansk universiteti va boshqa qator hamkor universitetlar bilan talabalar akademik mobillik dasturi yo‘lga qo‘yilgan.
                    </p>
                    <p>
                        2021-yil bahorgi semestri damovida 4 nafar talabaning akademik mobillik dasturida ishtiroki ta’minlandi, 2021-yil kuzgi semestri davomida 30 yaqin talabaning akademik mobillik dasturida ishtirok etishini ta’minlash rejalashtirilgan.
                    </p>
                </div>
            </div>
        </>
    );
}

export default StudentExchange;
