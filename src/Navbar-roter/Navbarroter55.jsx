import React from 'react';
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
const Bookstore = () => {
    return (
        <>
          <br />
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
            <div className="container mt-5">
                <h1 className="text-center">Kitob do'koni</h1>
                <p className="text-center">
                    Universitet kitob do‘koni turli xil mahsulotlar va xizmatlarni taklif etadi. Kitob do‘konida eng yangi nashrlardan tortib bir necha yil oldin nashr etilgan darslik va badiiy adabiyotlarni ham topishingiz mumkin. Agar kitob javonlarda topilmasa, uni siz uchun maxsus buyurtma qilishingiz mumkin.
                </p>
                <div className="text-center">
                    <img
                        src="https://tsul.uz/media/tdeppsbejg41_11_09_19_08.jpg"
                        alt="Kitob do'koni javonlari"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="text-center">
                    <img
                        src="https://tsul.uz/media/xryxmyakas52_11_09_19_08.jpg"
                        alt="Kitob do'koni kitoblari"
                        className="img-fluid"
                    />
                </div>
            </div>
        </>
    );
};

export default Bookstore;
