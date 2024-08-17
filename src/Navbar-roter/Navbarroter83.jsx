import{ NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar-roter1.css';
const IELTSCourse = () => {
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
            <div id='anti-corruption-container' className="course-container">
                <h1>IELTSga 100 soatda tayyorlaning</h1>
                <p>Toshkent davlat yuridik universiteti “100 soat ichida IELTS” intensiv ingliz tili kurslariga taklif etadi.</p>

                <h2 id='h33'>Kurs murabbiylari:</h2>
                <ul>
                    <li><strong>Speaking</strong> – Oybek Toshmatov, Borough Manhetten ALCC bitiruvchisi, Webster universiteti magistri, 8 yillik pedagogik tajriba;</li>
                    <li><strong>Writing</strong> – Ulug'bek Yoqubov, Webster universiteti magistri, IELTS 7.5, 4 yillik pedagogik tajriba;</li>
                    <li><strong>Reading</strong> – Yulduz Sayfulayeva, Webster universiteti magistri, IELTS 8.0;</li>
                    <li><strong>Listening</strong> – Sardor Surmanov, Webster universiteti magistri, IELTS 7.0.</li>
                </ul>

                <p>Boshqa kurslardan farqli ravishda, 3 oy davomida standart 72 soat emas, 96 soat ya’ni 33 foiz ko‘proq ta’lim olasiz!</p>

                <h3 id='h33'>Har bir mashg‘ulotning davomiyligi – 2 soat (120 minut). Mashg‘ulotlar davriyligi:</h3>
                <ul>
                    <li>birinchi oyda – haftada 3 kun (dushanba, chorshanba, juma);</li>
                    <li>ikkinchi oyda – haftada 4 kun (dushanba, chorshanba, payshanba, juma);</li>
                    <li>uchinchi oyda – haftada 5 kun (dushanba, seshanba, chorshanba, payshanba, juma).</li>
                </ul>

                <p>Siz o‘zingiz uchun qulay bo‘lgan vaqtni tanlashingiz mumkin:</p>
                <ul>
                    <li>15:00 dan 17:00 gacha;</li>
                    <li>10:00 dan 12:00 gacha.</li>
                </ul>

                <p>Mashg‘ulotlar 2-apreldan boshlanadi.</p>

                <h3 id='h33'>To'lov va narxlar:</h3>
                <p>Mashg‘ulotlar narxi – bir oyga 850 ming so‘m yoki butun kurs (3 oy) uchun 2 mln. 550 ming so‘m. Narxlar boshqa kurslar narxlari bilan solishtirganda qimmatroq tuyulishi mumkin. Biroq, kurslarimiz intensiv ekani hamda boshqa kurslardan 33 foiz ko‘proq mashg’ulot soatlarini taklif etayotganini inobatga olish lozim. Mashg’ulotlarning 1 soati 26 ming 563 so‘mni tashkil etadi va bu bozordagi o‘rtacha narxga mos keladi. Narxlar ichiga o‘quv va tarqatma materiallari (PDF formatda) ham kiradi. To‘lovni Payme ilovasi orqali ham amalga oshirish imkoniyati mavjud.</p>

                <p>Faqat TDYU talabalari, professor-o‘qituvchilari va boshqa xodimlari uchun maxsus narx – bir oyga 750 ming so‘m yoki butun kurs uchun (3 oy) 2 mln. 250 ming so‘m belgilangan.</p>

                <p>Kurslarga yozilish uchun <a href="https://legalcity.uz/language/ru/ielts" target="_blank" rel="noopener noreferrer">saytdagi anketani to‘ldiring</a> yoki +998977632106 raqamiga qo‘ng‘iroq qiling!</p>
            </div>
        </>
    );
}

export default IELTSCourse;
