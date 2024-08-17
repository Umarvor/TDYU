// src/YoungScientists.js
import Yosholimlar from '../img/yosh olimlar kengashi.jpg'
import Yosholimlarr from '../img/yok faoliyatining asosiy yonalishlari.jpg'
import React from 'react';
import './Navbar-roter1.css';

const YoungScientists = () => {
    return (
        <>
         <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
               




                <br />

            </article>
            <div className="young-scientists">
                <h2 className='h222' >Yosh Olimlar</h2>
                <img src={Yosholimlar} alt="Yosh olimlar" className="scientists-image" />
                <p>
                    Yosh olimlar bizning ilmiy jamoamizning kelajagini belgilab beruvchi muhim shaxslar hisoblanadi. Ular o'zlarining yangi g'oyalari va innovatsion yondashuvlari bilan ilm-fan sohasida katta yutuqlarga erishmoqdalar. Bu bo'limda bizning yosh olimlarimiz haqida batafsil ma'lumotlar keltirilgan.
                </p>
                <h3>Bizning Yosh Olimlarimiz:</h3>
                <ul>
                    <li><strong>Ismi: Akmal Ismatov</strong>
                        <ul>
                            <li><strong>Loyiha:</strong> Yadro fizikasida yangi texnologiyalar.</li>
                            <li><strong>Yutuqlari:</strong> Xalqaro konferensiyalarda qatnashgan, bir nechta ilmiy maqolalar chop etgan.</li>
                        </ul>
                    </li>
                    <li><strong>Ismi: Dilnoza Abdullayeva</strong>
                        <ul>
                            <li><strong>Loyiha:</strong> Genetika va biotexnologiya sohasida tadqiqotlar.</li>
                            <li><strong>Yutuqlari:</strong> Xalqaro grantlar sohibi, genetik tadqiqotlar bo'yicha yetakchi olimlar qatorida.</li>
                        </ul>
                    </li>
                    <li><strong>Ismi: Jamshid Karimov</strong>
                        <ul>
                            <li><strong>Loyiha:</strong> Sun'iy intellekt va mashinani o'rganish.</li>
                            <li><strong>Yutuqlari:</strong> Ko'plab xalqaro tanlovlar g'olibi, startap kompaniyasining asoschisi.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Yosh Olimlarimizning Faoliyati</h3>
                <p>
                    Bizning yosh olimlarimiz ilmiy izlanishlar olib borishadi va yangi kashfiyotlar qilishadi. Ularning faoliyati quyidagi yo'nalishlarni o'z ichiga oladi:
                </p>
                <ul>
                    <li><strong>Innovatsion Tadqiqotlar:</strong> Yosh olimlar yangi texnologiyalar va ilmiy yondashuvlar ustida ishlashadi.</li>
                    <li><strong>Ilmiy Konferensiyalar:</strong> Ular xalqaro va milliy konferensiyalarda o'z ishlanmalarini taqdim etishadi.</li>
                    <li><strong>Jamoatchilik Bilan Ishlash:</strong> Yosh olimlar jamoatchilik bilan yaqindan hamkorlikda bo'lib, ilm-fanni ommalashtirishda faol ishtirok etishadi.</li>
                </ul>
                <h3>Bizning Maqsadimiz</h3>
                <p>
                    Bizning maqsadimiz – yosh olimlarni qo'llab-quvvatlash, ularga zaruriy resurslar va imkoniyatlar yaratish. Biz ularning ilmiy izlanishlariga sharoit yaratish orqali kelajak avlod olimlarini tarbiyalaymiz.
                </p>
                <img src={Yosholimlarr} alt="Yosh olimlar" className="scientists-image" />

                <h3>Bizning manzilimiz!</h3>
                <iframe width="100%" height="250"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tashkent%20yuridik%20unversiteti+(My%20Business%20Name)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a>
              </iframe>
            
            </div>
        </>
    );
}

export default YoungScientists;
