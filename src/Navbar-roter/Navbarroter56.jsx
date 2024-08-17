import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const CampusCafeteria = () => {
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
                <h1 className="text-center">Kampusdagi ovqatlanish joylari</h1>
                <div className="content">
                    <p>
                        Universitet kampusida hozirgi kunda 1 ta kafeteriya va 3 ta bufet faoliyat olib boradi. Kafeteria bir vaqting o‘zida 300 kishiga bufetlarning har biri esa 80 kishiga xizmat ko‘rsata oladi.
                    </p>
                    <p>
                        Talabalar o‘z dars jadvallariga ovqatlanish vaqtini moslashtirish uchun turli xil variantlarga egalar, tayyorlanadigan ovqatlarning barchasi mijozlar istagidan kelib chiqib taqdim qilinadi. Ovqatlanish vaqti va kechki ovqatda uchta taom, shu jumladan vegetarian varianti va har kuni ikkita sho‘rva taklif etadilar. Har kuni asosiy taomlar bilan birga yon elementlarning o‘zgaruvchan tanlovi taklif etiladi. Aylanadigan stol va bar tushlik va kechki ovqatda qo‘shimcha tamlarni taqdim etadi. Har kuni o‘zgarib turadigan maxsus narsalarni taklif qilinadi. Maxsus mahsulotlarga makaron, o‘ralgan sendvichlar, pishirilgan kartoshka, omlet va pizza kiradi. Tushlik va kechki ovqatda to‘liq salat bar taklif etiladi. Shuningdek, mijozlar yangi meva va sabzavotlar, to‘liq donli non va don mahsulotlari, sut mahsulotlari, baliq, parranda go‘shti, yog‘siz go‘sht, turli xil qo‘shimchalar bilan yengil ham muzqaymoqlarni topishlari mumkin. Kampusdagi novvoyxona har kuni mazali xamir ovqatlar va shirinliklarni yetkazib beradi.
                    </p>
                    <p>
                        Oziq-ovqat xizmat ko‘rsatish zonasi o‘qish va turar joy hamjamiyatining ajralmas qismidir. Ular doimiy ravishda arzon narxlarda turli xil mazali taomlarni taklif qilishadi. Menyuni rejalashtirish, xarid qilish, tayyorlash va tozalashni kafeteriya va bufetlarga ishonish orqali talabalar o‘qish va dam olishga ko‘proq vaqt ajratadilar.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CampusCafeteria;
