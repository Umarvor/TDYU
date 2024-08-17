import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const Scholarships = () => {
    return (
        <>
         <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />




           
                <NavLink to='/General-Pages/talabalar_turar_jooylari'><h2 className='H3'>Talabalar turar joyi</h2></NavLink>
                <NavLink to='/General-Pages/Kitob_dukoni'><h2 className='H3'>Talabalar kitob do'koni</h2></NavLink>
                <NavLink to='/General-Pages/Ovqatlanish_joylari'><h2 className='H3'>Ovqatlanish joylari</h2></NavLink>
                <NavLink to='/General-Pages/Stipendiyalar'><h2 className='H3'>Stipendiyalar</h2></NavLink>
                <br />

            </article>
            <div className="containerrr">
                <h1 className="text-center">Stipendiyalar</h1>
                <div className="content">
                    <p>
                        Toshkent davlat yuridik universitetida talabalar uchun “O‘zbekiston Respublikasi Prezidenti davlat stipendiyasi” va nomdor davlat stipendiyalari hamda universitet miqyosidagi “Universitet stipendiyasi”, “G‘afur G‘ulom stipendiyasi”, “Adliya vaziri stipendiyasi”da ishtirok etish imkoni mavjud.
                    </p>
                    <p>
                        Universitetda stipendiyaga nomzod talabalar bilan ishlash mexanizmi joriy etilgan bo‘lib, talababay tizim asosida har bir nomzod uchun ilmiy rahbar biriktiriladi hamda universitet tomonidan har taraflama qo‘llab-quvvatlanadi. Stipendiat talabalar va nomzodlar bilan Ma’naviyat va ma’rifat markazining Iqtidorli yoshlarni qo‘llab-quvvatlash va huquqiy targ‘ibot bo‘limi tizimli ishlarni amalga oshiradi.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Scholarships;
