import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const Stipendiya = () => {
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
            <div id='anti-corruption-container' className="stipendiya-container">
                <h1>TDYU Talabalarga Stipendiya Berish va Ijtimoiy Yordam Ko‘rsatish Tartibi</h1>

                <div className="section">
                    <p>
                        Toshkent davlat yuridik universiteti talabalariga stipendiya to‘lovlari O‘zbekiston Respublikasi Vazirlar Maxkamasining 2020-yil 31-yanvardagi “Oliy ta'lim muassasalari talabalariga to‘lanadigan stipendiyalar miqdorlarini belgilash hamda stipendiyalar tayinlash va to‘lash tartibini takomillashtirish chora-tadbirlari to‘g‘risida”gi 59-sonli qaroriga asosan amalga oshiriladi.
                    </p>
                </div>

                <div className="section">
                    <div className="section-header">Jamg‘arma Mablag‘lari</div>
                    <p>
                        Tegishli moliya yilida oliy ta'lim muassasalarida stipendiya to‘lovlari uchun rejalashtirilgan byudjet mablag‘lariga nisbatan 10 foiz hamda to‘lov-kontrakt bo‘yicha rejalashtirilgan tushumlarning 2 foiz miqdoridagi mablag‘lar hisobiga Talabalarni rag‘batlantirish jamg‘armasi (keyingi o‘rinlarda Jamg‘arma deb ataladi) tashkil etilgan.
                    </p>
                </div>

                <div className="section">
                    <div className="section-header">Nizom va Kengash Bayonnomasi</div>
                    <p>
                        Ushbu jamg‘arma mablag‘laridan foydalanishda universitet rektorining 2020-yil 19-avgustdagi 08-146-son buyrug‘i bilan tasdiqlangan “Toshkent davlat yuridik universitetining iqtidorli talabalariga stipendiya tayinlash va grant ajratish to‘g‘risida”gi Nizom va universitet Kengashining 2020-yil 3-apreldagi 5-son yig‘ilishi bayonnomasi bilan tasdiqlangan “Toshkent davlat yuridik universiteti talabalarini rag‘batlantirish jamg‘armasi mablag‘laridan foydalanish hamda uning mablag‘laridan talabalarni moddiy qo‘llab-quvvatlash” tartibi mezonlariga asosan amalga oshiriladi.
                    </p>
                </div>

                <div className="section">
                    <div className="section-header">Stipendiya Komissiyasi</div>
                    <p>
                        Universitet talabalarini jamg‘arma mablag‘lari hisobidan rag‘batlantirish bo‘yicha universitet rektorining 2020-yil 11-sentabrdagi 02-116-sonli buyrug‘i bilan talabalarga o‘quv semestri yakuni bo‘yicha fanlardan o‘zlashtirish ko‘rsatkichlari bo‘yicha stipendiya belgilash, alohida qobiliyat va iqtidorga egaligi, jamoat ishlarida faolligi, shuningdek, ijtimoiy himoyaga muhtoj talabalarni rag‘batlantirish hamda moddiy yordam to‘lovi tayinlashda stipendiya komissiyasi tashkil etilgan.
                    </p>
                </div>

                <div className="section">
                    <div className="section-header">Grantlar Ajratish</div>
                    <p>
                        Universitet talabalariga jamg‘arma mablag‘lari hisobidan iqtidorli talabalarga stipendiya va grantlar ajratish bo‘yicha universitet rektorining 2020-yil 26-avgustdagi 02-109-sonli buyrug‘i bilan universitet komissiyasi tashkil etilgan.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Stipendiya;
