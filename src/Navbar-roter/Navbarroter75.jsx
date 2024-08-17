import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const pdfLinks = [
    {
        title: 'Elektron arizalarni qabul qilish portali',
        url: '../img/IELTS 8.5 Routine.pdf'
    },
    {
        title: 'Hujjatlar roʻyxati va topshirish muddati',
        url: '../img/IELTS 8.5 Routine.pdf'
    },
    {
        title: 'Xorijiy fuqarolarni oʻqishga qabul qilishda suhbat oʻtkazish tartibi va baholash mezonlari',
        url: '../img/IELTS 8.5 Routine.pdf'
    },
    {
        title: 'Xorijiy fuqarolarni oʻqishi uchun toʻlov kontrakt miqdori',
        url: '../img/IELTS 8.5 Routine.pdf'
    }
];

const PdfLinks = () => {
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
            <div className="pdf-links">
                <ul>
                    {pdfLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} download>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PdfLinks;
