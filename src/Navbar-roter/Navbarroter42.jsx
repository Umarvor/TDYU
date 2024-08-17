import React from 'react';
import { NavLink } from 'react-router-dom';
const StudentExchange = () => {
    return (
        <><br />
        <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Boh sahifaga qaytish</a>
                <br />



                <NavLink to='/General-Pages/Xalqaro_hamkorlik'><h3 className='H3'>Xalqaro hamkorlik</h3></NavLink>
                <NavLink to='/General-Pages/Xalqaro_OTMlar'><h3 className='H3'>Hamkor OTMlar</h3></NavLink>
                <NavLink to='/General-Pages/Xalqaro_Tashkilotlar'><h3 className='H3'>Xalqaro tashkilotlar</h3></NavLink>
                <NavLink to='/General-Pages/Akademik_mobillik'><h3 className='H3'>Akademig mobillik</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>

                <br />

            </article>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Talabalar almashinuvi</h1>
                <div style={{ margin: '20px 0' }}>
                    <p>
                        2020-yil davomida 3 nafar talaba akademik almashinuv dasturi doirasida hamkor universitetlardan TDYUga o‘qishga kelgan.
                    </p>
                    <p>
                        Bundan tashqari, har yili TDYU talabalarining akademik mobillik dasturlarida faol ishtirok etishi ta’minlanadi.
                        Hozirgi kundagi epidemiologik vaziyatga qaramasdan Nagoya universiteti, MIE universiteti, Mikolas Romeris universiteti,
                        Sharqiy Xitoy siyosiy fanlar va huquq universiteti, Belarus davlat universiteti, Gdansk universiteti va boshqa qator
                        hamkor universitetlar bilan talabalar akademik mobillik dasturi yo‘lga qo‘yilgan.
                    </p>
                    <p>
                        2021-yil bahorgi semestri davomida 4 nafar talabaning akademik mobillik dasturida ishtiroki ta’minlandi,
                        2021-yil kuzgi semestri davomida 30 yaqin talabaning akademik mobillik dasturida ishtirok etishini ta’minlash rejalashtirilgan.
                    </p>
                </div>
            </div>
        </>
    );
};

export default StudentExchange;
