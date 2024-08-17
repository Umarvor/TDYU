import './Navbar.css';
import Images from '../img/_Sign logo_EN_primary.png'
import Img from '../img/icons8-menu-50.png'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Nuqta from '../img/3917040.png'
import { NavLink, Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import Twitter from '../img/twitter.png'
import Telegram from '../img/telegram.png'
import Youtube from '../img/youtube.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/icons8-facebook-48.png'
function Navbar() {

    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);

    };

    const closePopup = () => {
        setIsPopupOpen(false);

    };
    const [showGreetings, setShowGreetings] = useState(false);
    const [showGreetingss, setShowGreetingss] = useState(false);
    const [showGreetingsss, setShowGreetingsss] = useState(false);
    const [showGreetingssss, setShowGreetingssss] = useState(false);
    const [showGreetingsssss, setShowGreetingsssss] = useState(false);
    const [showGreetingssssss, setShowGreetingssssss] = useState(false);
    const [showGreetingsssssss, setShowGreetingsssssss] = useState(false);
    const [showGreetingssssssss, setShowGreetingssssssss] = useState(false);
    const [showGreetingsssssssss, setShowGreetingsssssssss] = useState(false);
    const [showGreetingssssssssss, setShowGreetingssssssssss] = useState(false);
    const handleUniversityClick = () => {
        setShowGreetings((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickk = () => {
        setShowGreetingss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkk = () => {
        setShowGreetingsss((prevShowGreetings) => !prevShowGreetings);
    };

    const handleUniversityClickkkk = () => {
        setShowGreetingssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkk = () => {
        setShowGreetingsssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkkk = () => {
        setShowGreetingssssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkkkk = () => {
        setShowGreetingsssssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkkkkk = () => {
        setShowGreetingssssssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkkkkkk = () => {
        setShowGreetingsssssssss((prevShowGreetings) => !prevShowGreetings);
    };
    const handleUniversityClickkkkkkkkkk = () => {
        setShowGreetingssssssssss((prevShowGreetings) => !prevShowGreetings);
    };
    return (


        <div className="navbar" >
            <img onClick={openPopup} className='Nuqta' src={Nuqta} alt="" />


            {isPopupOpen && (
                <div className="popup">
                    <div className='close-btn-parent'>
                        <div className="close-btn" onClick={closePopup}>X</div>
                        <div className="close-btn" onClick={closePopup}>X</div>
                    </div>

                    <div className="popup-content">
                        <Link to='/'><h1 className='menuuu'>Menyu</h1> </Link>

                        <p className='buxankaa' onClick={handleUniversityClick}> Abituriyentlar</p>
                        {showGreetings && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/Talim_dasturlari'><h3>Ochiq eshiklar kuni</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Bakalavriyatga_qabul'><h3>Bakalavriyatga qabul</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Xorijiy_fuqarolar_qabuli'><h3>Xorijiy fuqarolar qabuli</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Qabul_komissiyasi'><h3>Qabul komissiyasi bilan bog'lanish</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Qushma_talim_dasturlari'><h3>Qo'shma ta'lim dasturlari</h3></NavLink>

                            </div>

                        )}

                        <p className='buxankaa' onClick={handleUniversityClickk}>  Talabalar</p>
                        {showGreetingss && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/Elektron_kutubxona'><h3>Elektron kutubxona</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Masofaviy_talimm'><h3>Masoofaviy talim</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Mashgulotlar_jadvali'><h3>Mashg'ulotlar jadvali</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Xoriji_talabalarga'><h3>Xoriji talabalarga</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Stipendiyalar_va_garntlar'><h3>Stipendiya va grantlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Talabalarga_xizmat_korsatish'><h3>Talabalarga xizmat ko'rsatish markazi</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Yuridik_klinika'><h3>Yuridik klinika</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Street'><h3>Street Law</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Akademik_mobilik'><h3>Akademig mobillik</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Xorijiy_profetsorlar'><h3>Xorijiy profetsorlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Treninglar'><h3>Treninglar va mayner kurslar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Klub'><h3>Klub va to'garaklar,mahorat darslari va festivallar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Korupsiyaga_qarshikurash_usullari'><h3>Korupsiyaga qarshikurash usullari</h3></NavLink>
                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkk}> Doktorantlar </p>
                        {showGreetingsss && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/Qabul'><h3>Qabul</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ilm_fond'><h3>Ilm fond</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_nashrlar'><h3>Ilmiy nashrlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_kengashlar'><h3>Ilmiy kengashlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkk}> Xodimlar </p>
                        {showGreetingssss && (
                            <div className='buxanka'>

                                <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Kasaba'><h3>Kasaba uyushmasi</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/kutubxona'> <h3>Elektron kutubxona</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Murojaat_qilish'><h3>Malaka oshirish</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkkk}>Hamkorlik  </p>
                        {showGreetingsssss && (
                            <div className='buxanka'>

                                <NavLink className='border-bottom' to='/General-Pages/Xalqaro_hamkorlik'><h3>Xalqaro hamkorlik</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Xalqaro_OTMlar'><h3>Hamkor OTMlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Xalqaro_Tashkilotlar'><h3>Xalqaro tashkilotlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Akademik_mobillik'><h3>Akademig mobillik</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                            </div>

                        )}
                        <NavLink className='border-bottom' to='/General-Pages/Unversitet'><p className='buxankaa'>Unversitet</p></NavLink>
                        <NavLink className='border-bottom' to='/General-Pages/Talim'><p className='buxankaa'>Ta'lim</p></NavLink>
                        <p className='buxankaa' onClick={handleUniversityClickkkkkk}>Ilmiy-inovatsion faolyat </p>
                        {showGreetingssssss && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_faolyat'><h3>Ilmiy faolyat</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_nashrlarr'><h3>Ilmiy nashrlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Yosh_olimlar_kengashi'> <h3>Yosh olimlar kengashi</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Davlat_grantlar'><h3>Davlat ilmiy texnik dasturlari doirasidagi grantlar</h3></NavLink>
                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkkkkk}>Xalqaro faolyat</p>
                        {showGreetingsssssss && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/xalqaro_faolyatlar'><h3>xalqaro faolyatlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/xalqaro_hamkorliklar'><h3>xalqaro hamkorlik</h3></NavLink>

                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkkkkkk}>Talabalar hayoti</p>
                        {showGreetingssssssss && (
                            <div className='buxanka'>

                                <NavLink className='border-bottom' to='/General-Pages/talabalar_turar_jooylari'><h3>Talabalar turar joyi</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Kitob_dukoni'><h3>Talabalar kitob do'koni</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ovqatlanish_joylari'><h3>Ovqatlanish joylari</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Stipendiyalar'><h3>Stipendiyalar</h3></NavLink>
                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkkkkkkk}>Qabul 2024</p>
                        {showGreetingsssssssss && (
                            <div className='buxanka'>

                                <NavLink className='border-bottom' to='/General-Pages/Qabul_jarayoniga_oid_elonlar'><h3>Qabul jarayoniga oid elonlar</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Talabalarni_uqishini_kuchirish'><h3>Talabalarni o'qishini ko'chirish</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Qushmaa_talim_dasturlari'><h3>Qo'shma talim dasturlari asosida o'qishga qabul qilish</h3></NavLink>

                            </div>

                        )}
                        <p className='buxankaa' onClick={handleUniversityClickkkkkkkkkk}>SDG</p>
                        {showGreetingssssssssss && (
                            <div className='buxanka'>
                                <NavLink className='border-bottom' to='/General-Pages/Maktab_oquvchilari'> <h3>Maktab O'quvchilari bilan ishlash</h3></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Rijolanish_yulida_hamkorlik'><h3>Barqaror rivojlanish yo'lida hamkorlik</h3></NavLink>

                            </div>

                        )}

                        <br /><br />
                        <h1 className='Footer-s'>Bizningijtimoiy tarmoqlar</h1>
                        <article className="Footer" >

                            <a href="https://twitter.com/tsulofficial" target="_blank" > <img className="Footer11" src={Twitter} alt="" /></a>
                            <a href="https://t.me/tsulofficial" target="_blank" ><img className="Footer11" src={Telegram} alt="" /></a>
                            <a href="https://www.youtube.com/channel/UCTAhGEQDYohjqmDAsD9yRBg" target="_blank" ><img className="Footer11" src={Youtube} alt="" /></a>

                            <a href="https://www.instagram.com/tsulofficial" target="_blank" ><img className="Footer11" src={Instagram} alt="" /></a>
                            <a href="https://www.fb.com/tsulofficial" target="_blank" ><img className="Footer11" src={Facebook} alt="" /></a>

                        </article>
                        <h1 className='Projectt'>Yangi  O'zbekistonni birga quramiz!</h1>
                    </div>
                </div>

            )
            }

            <ul className="navbar-nav">
                <li className="nav-item">
                    <h3 id='Nuqta' className="nav-link" >Qabul bulimi:</h3>
                </li>
                <li className="nav-item">
                    <h3 className="nav-link" >
                        <a id='Nuqta' className='aa' href="tel:+998712334209">71 233-42-09</a>
                    </h3>
                </li>
                <li className="nav-item">
                    <h3 id='Nuqta' className="nav-link" >
                        Abituriyentlar
                        <article className='sh'>

                            <NavLink className='border-bottom' to='/General-Pages/Talim_dasturlari'><h3>Ochiq eshiklar kuni</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Bakalavriyatga_qabul'><h3>Bakalavriyatga qabul</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Xorijiy_fuqarolar_qabuli'><h3>Xorijiy fuqarolar qabuli</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Qabul_komissiyasi'><h3>Qabul komissiyasi bilan bog'lanish</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Qushma_talim_dasturlari'><h3>Qo'shma ta'lim dasturlari</h3></NavLink>


                        </article>
                    </h3>
                </li>
                <li className="nav-item">
                    <h3 id='Nuqta' className="nav-link" >
                        Talabalar
                        <article className='shhh'>
                            <NavLink className='border-bottom' to='/General-Pages/Elektron_kutubxona'><h3>Elektron kutubxona</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Masofaviy_talimm'><h3>Masoofaviy talim</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Mashgulotlar_jadvali'><h3>Mashg'ulotlar jadvali</h3></NavLink>

                            <NavLink className='border-bottom' to='/General-Pages/Xoriji_talabalarga'><h3>Xoriji talabalarga</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Stipendiyalar_va_garntlar'><h3>Stipendiya va grantlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Talabalarga_xizmat_korsatish'><h3>Talabalarga xizmat ko'rsatish markazi</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Yuridik_klinika'><h3>Yuridik klinika</h3></NavLink>
                            <NavLink className='border-bottom' to='/Genera-Pages/Street'><h3>Street Law</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Akademik_mobilik'><h3>Akademig mobillik</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Xorijiy_profetsorlar'><h3>Xorijiy profetsorlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Treninglar'><h3>Treninglar va mayner kurslar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Klub'><h3>Klub va to'garaklar,mahorat darslari va festivallar</h3></NavLink>

                            <NavLink className='border-bottom' to='General-Pages/Korupsiyaga_qarshikurash_usullari'><h3>Korupsiyaga qarshikurash usullari</h3></NavLink>
                        </article>
                    </h3>
                </li>
                <li id='Nuqta' className="navvv-item">
                    <NavLink to="/"><img id='Nuqta' className='navv-item' src={Images} alt="" /></NavLink>
                </li>
                <li className="nav-item">
                    <h3 id='Nuqta' className="nav-link" >
                        Doktorantlar
                        <article className='shhhh'>
                            <NavLink className='border-bottom' to='/General-Pages/Qabul'><h3>Qabul</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Ilm_fond'><h3>Ilm fond</h3></NavLink>

                            <NavLink className='border-bottom' to='/General-Pages/Ilmiy_nashrlar'><h3>Ilmiy nashrlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Ilmiy_kengashlar'><h3>Ilmiy kengashlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>

                        </article>
                    </h3>

                </li>
                <li id='Nuqta' className="nav-item">
                    <h3 className="nav-link">
                        Xodimlar
                        <article className='shh'>

                            <NavLink className='border-bottom' to='/General-Pages/E_unversitety'><h3>E-unversitety</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Kasaba'><h3>Kasaba uyushmasi</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/kutubxona'> <h3>Elektron kutubxona</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Murojaat_qilish'><h3>Malaka oshirish</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>
                        </article>
                    </h3>


                </li>
                <li className="nav-item">
                    <h3 id='Nuqta' className="nav-link">
                        Hamkorlik
                        <article className='shh'>
                            <NavLink className='border-bottom' to='/General-Pages/Xalqaro_hamkorlik'><h3>Xalqaro hamkorlik</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Xalqaro_OTMlar'><h3>Hamkor OTMlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Xalqaro_Tashkilotlar'><h3>Xalqaro tashkilotlar</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Akademik_mobillik'><h3>Akademig mobillik</h3></NavLink>
                            <NavLink className='border-bottom' to='/General-Pages/Murojaat'><h3>Murojaat qilish</h3></NavLink>

                        </article>
                    </h3>
                </li>
                <article className='zsx'>
                    <li className="nav-item">
                        <h1 className='UserButton'>< UserButton /></h1>
                    </li>
                    <li className="nav-item">
                        <h3 className="nav-link">
                            <h3 className='darkk' onClick={toggleDarkMode}>{darkMode ? "🔆" : "🌙"}</h3>

                        </h3>
                    </li>
                </article>

            </ul>


            <div className='box5'>

                <div className='box6'>
                    <ul id='Nuqta' className='box8'>

                        <li className='box11'>

                            <NavLink className='border-bottom' to='/General-Pages/Unversitet'><h2>Unversitet</h2></NavLink>




                        </li>
                        <li className='box11'>
                            <NavLink className='border-bottom' to='/General-Pages/Talim'><h2>Ta'lim</h2></NavLink>
                        </li>
                        <li className='box11'>
                            <h2>Ilmiy-inovatsion faolyat</h2>
                            <article className='box11_11'>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_faolyat'><h2>Ilmiy faolyat</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ilmiy_nashrlarr'><h2>Ilmiy nashrlar</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Yosh_olimlar_kengashi'> <h2>Yosh olimlar kengashi</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Davlat_grantlar'><h2>Davlat ilmiy texnik dasturlari doirasidagi grantlar</h2></NavLink>
                            </article>
                        </li>
                    </ul>
                </div>

                <div id='Nuqta' className='box9'>
                    <ul className='box10'>
                        <li className='box11'>
                            <h2>Xalqaro faolyat</h2>
                            <article className='box11_11'>
                                <NavLink className='border-bottom' to='/General-Pages/xalqaro_faolyatlar'><h2>xalqaro faolyatlar</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/xalqaro_hamkorliklar'><h2>xalqaro hamkorlik</h2></NavLink>


                            </article>
                        </li>
                        <li className='box11'>


                            <h2>Talabalar hayoti</h2>

                            <article className='box11_11'>
                                <NavLink className='border-bottom' to='/General-Pages/talabalar_turar_jooylari'><h2>Talabalar turar joyi</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Kitob_dukoni'><h2>Talabalar kitob do'koni</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Ovqatlanish_joylari'><h2>Ovqatlanish joylari</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Stipendiyalar'><h2>Stipendiyalar</h2></NavLink>


                            </article>
                        </li>
                        <li className='box11'>
                            <h2>Qabul 2024</h2>
                            <article className='box11_11'>
                                <NavLink className='border-bottom' to='/General-Pages/Qabul_jarayoniga_oid_elonlar'><h2>Qabul jarayoniga oid elonlar</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Talabalarni_uqishini_kuchirish'><h2>Talabalarni o'qishini ko'chirish</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Qushmaa_talim_dasturlari'><h2>Qo'shma talim dasturlari asosida o'qishga qabul qilish</h2></NavLink>




                            </article>
                        </li>
                        <li className='box11'>
                            <h2>SDG</h2>
                            <article className='box11_111'>

                                <NavLink className='border-bottom' to='/General-Pages/Maktab_oquvchilari'> <h2>Maktab O'quvchilari bilan ishlash</h2></NavLink>
                                <NavLink className='border-bottom' to='/General-Pages/Rijolanish_yulida_hamkorlik'><h2>Barqaror rivojlanish yo'lida hamkorlik</h2></NavLink>
                            </article>
                        </li>

                    </ul>
                </div>
            </div>
        </div >


    );
}

export default Navbar;