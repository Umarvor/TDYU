import React from 'react';
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
const YouthCouncil = () => {
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
            <div className='Navbarroter47'>
                <h1>Yosh olimlar kengashi</h1>
                <p>
                    <strong>Toshkent davlat yuridik universiteti (TDYU) Yosh olimlar kengashi</strong> yosh olimlarni birlashtirish va ularning ilmiy manfaatlarini himoya qilish maqsadida tashkil etilgan.
                </p>
                <h2 className='xxxx'>TDYU Yosh olimlar kengashi (YOK)</h2>
                <p>
                    TDYUning Yosh olimlar kengashi (YOK) – doimiy faoliyat yurituvchi kollegial organ bo‘lib, TDYUning yosh olimlari vakillaridan tashkil topgan va o‘z faoliyatini jamoatchilik asosida olib boradi. 40 yoshgacha bo‘lgan TDYU mustaqil izlanuvchilari, doktorantlari va professor-o‘qituvchilari, shuningdek bakalavr va magistratura talabalari YOK a’zolari hisoblanadi.
                </p>
                <p>
                    YOKning asosiy maqsadi yosh olimlarning ilmiy manfaatlarini himoya qilish, professional o‘sishini ta’minlash va jamoatchilik ishida faolligini oshirish, ilmiy muammolar echimini topishda birlashtirish, innovatsiya faoliyatini rivojlantirish, ilmiy natijalarini ommalashtirish hamda yoshlarni ilmiy tadqiqotlarga jalb etishdir.
                </p>
                <h3>YOKning asosiy yo‘nalishlari:</h3>
                <ul>
                    <li>Yoshlarni Universitetning ilmiy va jamoat ishlarida, ilmiy va ilmiy-metodik tadbirlarda faol qatnashishga jalb etish</li>
                    <li>Milliy, xorijiy va xalqaro miqyosdagi dolzarb ilmiy muammolarni muhokama qilish uchun konferensiyalar, davra suhbatlari va ilmiy seminarlar tashkil etish</li>
                    <li>Yetuk milliy va xorijiy olimlar, amaliyotchilar va siyosatchilar bilan uchrashuvlar tashkil etish</li>
                    <li>Yosh olimlarning ilmiy maqolalari va tezislarini ilmiy jurnallar, to‘plamlar va boshqa nashrlarda chop etilishini tashkil etish</li>
                    <li>Huquq sohasida yosh olimlarning ilmiy va pedagogik faoliyatining asosiy yo‘nalishlari va natijalari haqida axborot almashinishini ta’minlash</li>
                    <li>Huquq sohasidagi ilmiy faoliyat bilan bog‘liq muammolarni hal etishga qaratilgan tajriba almashish mexanizmini joriy etish</li>
                    <li>Yosh olimlar faoliyatini (hizmat safarlari, konferensiyalarda ishtirok, maqola nashr etish va h.k.) qo‘llab-quvvatlash maqsadida moddiy manbalarni (milliy va xorijiy grantlar, homiylik yordami) jalb etish</li>
                    <li>Yosh olimlar ilmiy tadqiqot yo‘nalishlariga bog‘liq bo‘lgan o‘quv va ilmiy-tadqiqot loyihalari to‘g‘risida ma’lumotlar tarqatish</li>
                    <li>Huquq sohasida yosh olimlar natijalarini keng tarqatish va joriy etish</li>
                    <li>Universitet yosh olimlari ijodiy va professional imkoniyatlarini to‘liq amalga oshirish maqsadida qonun chiqaruvchi va huquq qo‘llovchi organlar bilan o‘zaro hamkorlik qilish</li>
                </ul>
                <p>
                    Yosh olimlar kengashi huzurida tadqiqot va ijod bilan shug'ullanadigan respublika va chet el yoshlarini birlashtirgan "Yosh olimlar klubi" mavjud.
                </p>
                <p>
                    Yosh olimlar kengashi rahbarligi ostida universitetda "The Square Times" gazetasi tashkil etildi, shuningdek, yosh olimlarning ilmiy maqolalar yozish ko’nikmasini oshirish uchun "PublishPlease" kurslari ham olib borilmoqda, boshlang'ich sinf o'quvchilari huquqiy bilimlarini oshirishga qaratilgan "KidsLaw" loyihasi va TSUL research Club to’garagi faoliyat yuritmoqda.
                </p>
                <h3>Yosh olimlar kengashi dasturida:</h3>
                <ul>
                    <li>"Ustoz-shogird" tizimini rivojlantirish bo'yicha "O'zbekistonda xizmat ko'rsatgan yuristlar" video-loyihasi</li>
                    <li>"XXI asr - intellektual yoshlar asri" ilmiy-nazariy konferentsiyasi</li>
                    <li>"Eng yaxshi yosh olim" tanlovini tashkil etish</li>
                    <li>TDYU doktorantlari tomonidan tizimli ravishda amalga oshirilayotgan "Ilm-fandagi ayollarning o'rni" loyihasi</li>
                    <li>Yosh olim ayollarni qo'llab-quvvatlashga va xorijiy davlatlarning grantlarida ishtirok etishni ta'minlashga qaratilgan qator loyihalar</li>
                </ul>
                <p><strong>Yosh olimlar kengashi raisi:</strong> Achilova Liliya Ilxomovna - dotsent v.b, yuridik fanlar bo‘yicha PhD</p>
            </div>
        </>
    );
};

export default YouthCouncil;
